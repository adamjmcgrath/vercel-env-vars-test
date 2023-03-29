import { NextResponse } from "next/server";
export async function middleware(req) {
  return new NextResponse(`AUTH0_BASE_URL: ${process.env.AUTH0_BASE_URL}`, {
    status: 200,
    headers: { "content-type": "text/plain" },
  });
}

export const config = {
  matcher: ["/"],
};
