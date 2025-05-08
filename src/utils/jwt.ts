import {jwtDecode, JwtPayload} from "jwt-decode";
import {getUnixTime} from "date-fns";

export function verifyJwtToken(token: string) {
    const {exp} = jwtDecode<JwtPayload>(token);
    return exp ? exp - getUnixTime(new Date()) > 0 : false;
}