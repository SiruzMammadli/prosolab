import axios, {InternalAxiosRequestConfig} from "axios";
import {getAccessToken, getRefreshToken, setTokensCookie} from "@/src/utils/cookies";
import {StatusCode} from "@/src/utils/enums";
import {jwtDecode, JwtPayload} from "jwt-decode";
import {getUnixTime} from "date-fns";

const http = axios.create({
    baseURL: "" + process.env.NEXT_PUBLIC_API_V1_URL,
    timeout: 5000,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
});

http.interceptors.request.use(
    async (req: InternalAxiosRequestConfig) => {
        const accessToken = await getAccessToken();
        if (accessToken) {
            const {exp} = jwtDecode<JwtPayload>(accessToken);
            if (exp && getUnixTime(new Date()) < exp) {
                req.headers.Authorization = "Bearer " + accessToken;
            } else {
                const response = await axios.post(process.env.NEXT_PUBLIC_API_V1_URL + "/auth/refresh-token", {
                        refresh_token: await getRefreshToken(),
                    }, {headers: {Authorization: "Bearer " + accessToken}});
                if (response.status === StatusCode.Ok) {
                    const accessToken = response.data.access_token;
                    await setTokensCookie(accessToken, response.data.refresh_token);
                    req.headers.Authorization = "Bearer " + accessToken;
                }
            }
        }
        return req;
    },
    error => error
);

export default http;