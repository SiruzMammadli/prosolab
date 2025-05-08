import {type NextRequest, NextResponse} from "next/server";
import {verifyJwtToken} from "@/src/utils/jwt";

const PUBLIC_ROUTES: ReadonlyArray<string> = ['/signin'];
const isPublicRoute = (url: string) => PUBLIC_ROUTES.some(route => route.startsWith(url));

export function middleware({url, nextUrl, cookies}: NextRequest) {
    const {value: accessToken} = cookies.get(process.env.COOKIE_TOKEN_NAME + "") ?? {value: null}

    const isVerifiedToken = accessToken && verifyJwtToken(accessToken);

    if (isPublicRoute(nextUrl.pathname)) {
        return isVerifiedToken ? NextResponse.redirect(new URL('/admin', url)) : NextResponse.next();
    }

    if (!isVerifiedToken) {
        return NextResponse.redirect(new URL('/signin', url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/signin',
        '/admin/:path*',
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|$).*)'
    ],
}