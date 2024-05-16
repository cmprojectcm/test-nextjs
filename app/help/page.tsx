"use client";
import { useSession } from "next-auth/react";
import { useCurrentSession } from "../lib/sessionActions";
import AuthGuard from "../auth-guard/AuthGuard";

export default function Page() {
  const { data, status } = useSession();

  //   return status == "authenticated" ? <>Help</> : <>restricted</>;
  console.log("data: ", data);
  return (
    <AuthGuard roles={["test-role"]}>
      <div>
        <p>Heeeeelp</p>
      </div>
    </AuthGuard>
  );
}
