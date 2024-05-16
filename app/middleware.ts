export { default } from "next-auth/middleware";

export const config = { matcher: ["/dashboard"] };

// // export { auth as middleware } from "./auth";

// import { cookies } from "next/headers";
// import { NextRequest, NextResponse } from "next/server";
// import { auth } from "./auth";

// const protectedRoutes = ["/dashboard"];
// const publicRoutes = ["/"];

// export default async function middleware(req: NextRequest) {
//   const path = req.nextUrl.pathname;
//   const isProectedRoute = protectedRoutes.includes(path);
//   const isPublicRoute = publicRoutes.includes(path);

//   const cookie = cookies().get("session")?.value;
//   const session = await auth();
//   console.log("middleware session: ", session);

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
// };
