import { JwtPayload, jwtDecode } from "jwt-decode";
import NextAuth from "next-auth";
import keycloak from "next-auth/providers/keycloak";
import Jwt from "jsonwebtoken";
import { hkdf } from "crypto";
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [keycloak],
  session: {
    strategy: "jwt",
    maxAge: 4 * 60 * 60,
    updateAge: 3 * 60 * 60,
  },
  callbacks: {
    session({ session, token, user }) {
      session.user.id = token.id;
      session.user.roles = token?.roles;
      return session;
    },
    async jwt({ token, user, account, profile }) {
      if (user) {
        token.id = user.id;
      }
      if (account) {
        if (account.access_token) {
          let decodedToken = Jwt.decode(account.access_token || "");
          token.roles = decodedToken?.realm_access?.roles;
        }
      }

      const signedToken = Jwt.sign(
        token,
        "Xq5gBf6r0YIS/3HBuWAEMwCci5s1SdpTVvNLHu3Ykak8"
      );

      return token;
    },
  },
});
