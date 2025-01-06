import { NextResponse } from "next/server";

const protectedRoutes = ["/profile"];

export default function middleware(req) {
  const ssoUserCookie = req.cookies.get("ssoUser");
  const isAuthenticated = ssoUserCookie ? true : false;

  if (!isAuthenticated && protectedRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/login', req.url))
  }
}
