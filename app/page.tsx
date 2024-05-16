// mark as client component
"use client";

import { useSession } from "next-auth/react";
import { SignIn } from "./components/signIn-button";
import { SignOut } from "./components/signout-button";
import { useCurrentSession } from "./lib/sessionActions";
import { useEffect } from "react";

export default function Home(props: any) {
  const { data: sessionData, status } = useSession();
  useEffect(() => {
    console.log("session: ", sessionData);
  }, [sessionData]);
  return (
    <div>
      {sessionData ? (
        <>
          <p>Welcome {sessionData?.user?.name}. Signed In As</p>
          <p>{sessionData?.user?.email}</p>
          <p>Expires on: {sessionData?.expires}</p>
          <p>Date now: {Date.now()}</p>
          <SignOut />
        </>
      ) : (
        <>
          <p>Not Signed In</p>
          <SignIn />
        </>
      )}
    </div>
  );
}
