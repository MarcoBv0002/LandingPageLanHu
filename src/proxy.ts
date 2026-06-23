import { NextRequest, NextResponse } from "next/server";

const BLUE_TIGER_ROUTE = "/blue-tiger";

function isBlueTigerHost(host: string) {
  const hostname = host.split(":")[0]?.toLowerCase() ?? "";

  return (
    hostname === "blue-tiger.afc-peru.com" ||
    hostname.startsWith("blue-tiger.")
  );
}

function shouldSkipRewrite(pathname: string) {
  return (
    pathname.startsWith(BLUE_TIGER_ROUTE) ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/images") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml"
  );
}

export function proxy(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const { pathname, search } = request.nextUrl;

  if (!isBlueTigerHost(host) || shouldSkipRewrite(pathname)) {
    return NextResponse.next();
  }

  const rewriteUrl = request.nextUrl.clone();
  rewriteUrl.pathname = `${BLUE_TIGER_ROUTE}${pathname === "/" ? "" : pathname}`;
  rewriteUrl.search = search;

  return NextResponse.rewrite(rewriteUrl);
}

export const config = {
  matcher: ["/((?!api).*)"]
};
