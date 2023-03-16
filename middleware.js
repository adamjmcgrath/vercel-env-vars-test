import { NextResponse } from "next/server";
import { getSession } from "@auth0/nextjs-auth0/edge";

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  if (pathname === "/") {
    const res = NextResponse.next();
    const session = await getSession(req, res);
    const loggedIn = Boolean(session);
    if (!loggedIn) {
      return NextResponse.redirect(new URL("/guest", req.url));
    }
  }
}

export const config = {
  matcher: ["/"],
};
