import { NextResponse, type NextRequest } from "next/server";

const SESSION_COOKIE = "bft_session";

// Cheap gate: no cookie means no session. The API still validates the token.
export function proxy(request: NextRequest) {
  const hasCookie = request.cookies.has(SESSION_COOKIE);
  const { pathname, searchParams } = request.nextUrl;
  const isLogin = pathname === "/login";

  if (!hasCookie && !isLogin) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  // `expired` means the cookie is stale: let the login page through.
  if (hasCookie && isLogin && !searchParams.has("expired")) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|images|favicon.ico|.*\\..*).*)"],
};
