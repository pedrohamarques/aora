import { supabase } from "@services/supabase";
import { Session } from "@supabase/supabase-js";
import { createContext, useEffect, useState } from "react";

type AuthContextProps = {
    user: boolean | null;
    session: Session | null;
};

export const AuthContext = createContext<Partial<AuthContextProps>>({});

export function AuthProvider({ children }: React.PropsWithChildren) {
    const [user, setUser] = useState<null | boolean>(null);
    const [session, setSession] = useState<Session | null>(null);

    async function handleFetchSession() {
        const response = await supabase.auth.getSession();

        const { data, error } = response;
        if (!error) {
            setSession(data.session);
            setUser(session ? true : false);
        }
        const { data: authListener } = supabase.auth.onAuthStateChange(
            async (event, session) => {
                console.log(`Supabase auth event: ${event}`);
                setSession(session);
                setUser(session ? true : false);
            },
        );
        return () => {
            authListener!.subscription.unsubscribe();
        };
    }
    useEffect(() => {
        handleFetchSession();
    }, [user]);

    return (
        <AuthContext.Provider value={{ user, session }}>
            {children}
        </AuthContext.Provider>
    );
}
