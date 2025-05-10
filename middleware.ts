import {type NextRequest, NextResponse} from "next/server";
import {verifyJwtToken} from "@/src/utils/jwt";
import {getRefreshToken, setTokensCookie} from "@/src/utils/cookies";
import {StatusCode} from "@/src/utils/enums";
import axios from "axios";

const PUBLIC_ROUTES: ReadonlyArray<string> = ['/signin'];
const isPublicRoute = (url: string) => PUBLIC_ROUTES.some(route => route.startsWith(url));

export async function middleware({url, nextUrl, cookies}: NextRequest) {
    const {value: accessToken} = cookies.get(process.env.COOKIE_TOKEN_NAME + "") ?? {value: null}
    const isVerifiedToken = accessToken && verifyJwtToken(accessToken);
    const hasPublicRoute = isPublicRoute(nextUrl.pathname);

    if (hasPublicRoute && isVerifiedToken) return NextResponse.redirect(new URL('/admin', url));
    if (!hasPublicRoute && !accessToken) return NextResponse.redirect(new URL('/signin', url));
    if (!isVerifiedToken && accessToken) {
        const response = await axios.post(process.env.NEXT_PUBLIC_API_V1_URL + "/auth/refresh-token", {
            refresh_token: await getRefreshToken(),
        }, {headers: {Authorization: "Bearer " + accessToken}});

        if (response.status === StatusCode.Ok) {
            await setTokensCookie(response.data.access_token, response.data.refresh_token);
            return hasPublicRoute ? NextResponse.redirect(new URL('/admin', url)) : NextResponse.next();
        }
        return NextResponse.redirect(new URL('/signin', url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: [
        '/signin',
        '/admin/:path*'
    ],
}