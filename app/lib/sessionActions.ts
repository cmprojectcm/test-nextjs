import { Session } from "next-auth";
import { getSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
// This hook doesn't rely on the session provider
export const useCurrentSession = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [status, setStatus] = useState<string>("unauthenticated");
  const [isProtectedRoute, setProtectedRoute] = useState<boolean>(false);
  const pathName = usePathname();

  const retrieveSession = useCallback(async () => {
    try {
      setStatus("loading");
      const sessionData = await getSession();

      if (sessionData) {
        setSession(sessionData);
        setStatus("authenticated");
        return;
      }

      setStatus("unauthenticated");
    } catch (error) {
      setStatus("unauthenticated");
      setSession(null);
    }
  }, []);

  useEffect(() => {
    if (!session) {
      retrieveSession();
      console.log("retrieve session");
    }

    // use the pathname to force a re-render when the user navigates to a new page
  }, [retrieveSession, session, pathName, isProtectedRoute]);

  return { session, status, isProtectedRoute };
};

export const getUserSessionRoles = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [status, setStatus] = useState<string>("unauthenticated");
  const pathName = usePathname();
};
