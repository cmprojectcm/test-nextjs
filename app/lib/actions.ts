"use server";

import { auth, signIn, signOut } from "../auth";

export async function authenticate() {
  await signIn("keycloak");
}

export async function logOut() {
  return await signOut();
}

export async function keycloakSession() {
  return await auth();
}
