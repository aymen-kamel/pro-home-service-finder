
import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { Session, User, AuthError } from '@supabase/supabase-js';
import { toast } from 'sonner';

type AuthContextType = {
  session: Session | null;
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{
    error: AuthError | null;
    data: Session | null;
  }>;
  signUp: (email: string, password: string, fullName: string) => Promise<{
    error: AuthError | null;
    data: { user: User | null; session: Session | null } | null;
  }>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if Supabase is configured before attempting to use it
    if (!isSupabaseConfigured()) {
      console.error("Supabase URL and/or Anon Key are not configured.");
      toast({
        title: "Configuration Error",
        description: "Backend services are not properly configured.",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const result = await supabase.auth.signInWithPassword({ email, password });
      return {
        error: result.error,
        data: result.data.session
      };
    } catch (error) {
      console.error("Sign in error:", error);
      return {
        error: new AuthError("Failed to sign in"),
        data: null
      };
    }
  };

  const signUp = async (email: string, password: string, fullName: string) => {
    try {
      const result = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: fullName }
        }
      });
      
      return {
        error: result.error,
        data: result.data ? { 
          user: result.data.user, 
          session: result.data.session 
        } : null
      };
    } catch (error) {
      console.error("Sign up error:", error);
      return {
        error: new AuthError("Failed to sign up"),
        data: null
      };
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  const value = {
    session,
    user,
    loading,
    signIn,
    signUp,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
