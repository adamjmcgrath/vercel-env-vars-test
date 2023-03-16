import { NextResponse } from "next/server";
import { getSession } from "@auth0/nextjs-auth0/edge";

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  if (pathname === "/") {
    const res = NextResponse.next();
    const session = await getSession(req, res);
    const loggedIn = Boolean(session);
    if (!loggedIn) {
      return NextResponse.redirect(
        new URL(
          `/guest?baseurl=${process.env.AUTH0_BASE_URL}&vercelurl=${process.env.AUTH0_VERCEL_URL}`,
          req.url
        )
      );
    }
  }
}

export const config = {
  matcher: ["/"],
};
