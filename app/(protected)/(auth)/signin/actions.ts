"use server"
import {z} from "zod";
import http from '@/src/utils/axios';
import {StatusCode} from "@/src/utils/enums";
import {setTokensCookie} from "@/src/utils/cookies";
import {redirect} from "next/navigation";

const schema = z.object({
    email: z.string({invalid_type_error: "Email/Password is invalid"}).email(),
    password: z.string().min(8, {message: "Password must be at least 8 characters"}),
});

export const signin = async (_: unknown, formData: FormData) => {
    const validatedFields = schema.safeParse({
        email: formData.get("email"),
        password: formData.get("password"),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors
        }
    }

    const response = await http.post(`/auth/signin`, {
        email: validatedFields.data.email,
        password: validatedFields.data.password,
    });

    if (response.status === StatusCode.Ok) {
        await setTokensCookie(response.data.access_token, response.data.refresh_token);
        redirect("/admin");
    }
}