// mark as client component
"use client";

import { useSession } from "next-auth/react";
import { authenticate, keycloakSession, logOut } from "./lib/actions";
import { auth } from "./auth";
import { useEffect } from "react";

// importing necessary functions

export default function Home(props: any) {
  // extracting data from usesession as session
  const session = keycloakSession();

  return (
    <div>
      {session?.data ? (
        <>
          <p>Welcome {session.user?.name}. Signed In As</p>
          <p>{session.user?.email}</p>
          <button onClick={() => logOut()}>Sign out</button>
        </>
      ) : (
        <>
          <p>Not Signed In</p>
          {/* <button onClick={async () => await signIn("keycloak")}></button> */}
          <button onClick={() => authenticate()}>Sign in with keycloak</button>
        </>
      )}
    </div>
  );
}
