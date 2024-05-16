"use server";

import { isRedirectError } from "next/dist/client/components/redirect";
import { auth, signIn, signOut } from "../auth";
import { redirect } from "next/dist/server/api-utils";
import { useCurrentSession } from "./sessionActions";
export async function authenticate() {
  await signIn("keycloak");
}

export async function logOut() {
  // await signOut({ redirectTo: "/dashboard" });
  try {
    await signOut({ redirectTo: "/dashboard" });
  } catch (error) {
    if (isRedirectError(error)) {
      if (error?.message == "NEXT_REDIRECT") {
        console.log("test: ", error?.message == "NEXT_REDIRECT");
        console.error("test: ", error);
      }
    }
  }
}

export async function keycloakSession() {
  // return await auth();
  return await auth();
}

interface ILogOutFunc {
  redirectTo?: string;
  redirect?: boolean;
}
