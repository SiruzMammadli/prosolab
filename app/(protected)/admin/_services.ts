import http from '@/src/utils/axios';
import {deleteTokensCookie, getRefreshToken} from "@/src/utils/cookies";
import {StatusCode} from "@/src/utils/enums";

export async function signout() {
    if (confirm(`Are you sure you want to sign out?`)) {
        const res = await http.post("/auth/signout", {
            refresh_token: await getRefreshToken(),
        });

        if (res.status === StatusCode.NoContent) {
            await deleteTokensCookie();
            return true;
        }
    }
    return false;
}