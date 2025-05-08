'use server';
import {cookies} from "next/headers";

export const getAccessToken = async () => {
    const cookieStore = await cookies();
    return cookieStore.get("" + process.env.COOKIE_TOKEN_NAME)?.value;
}

export const getRefreshToken = async () => {
    const cookieStore = await cookies();
    return cookieStore.get("" + process.env.COOKIE_SID_NAME)?.value;
}

export const setTokensCookie = async (accessToken: string, refreshToken: string) => {
    const cookieStore = await cookies();

    cookieStore.set({
        httpOnly: true,
        name: "" + process.env.COOKIE_TOKEN_NAME,
        value: accessToken,
        secure: true,
        sameSite: 'strict',
    });

    cookieStore.set({
        httpOnly: true,
        name: "" + process.env.COOKIE_SID_NAME,
        value: refreshToken,
        secure: true,
        sameSite: 'strict',
    });
}

export const deleteTokensCookie = async () => {
    const cookieStore = await cookies();
    cookieStore.delete("" + process.env.COOKIE_TOKEN_NAME);
    cookieStore.delete("" + process.env.COOKIE_SID_NAME);
}