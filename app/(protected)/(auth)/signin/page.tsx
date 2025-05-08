'use client';
import {Button, Flex, TextInputLabeled} from "@/src/components";
import {useActionState} from "react";
import {signin} from "@/app/(protected)/(auth)/signin/actions";
import Form from "next/form";

export default () => {
    const [_, action] = useActionState(signin, null);
    return (
        <Flex
            direction="column"
            className="p-[24px] gap-y-[16px] max-w-[450px] w-full border-2 border-gray-100 rounded-xl shadow-md"
        >
            <h1 className="text-[27px] font-medium text-center">Sign in</h1>
            <Form action={action} className="flex flex-col gap-y-[12px]">
                <TextInputLabeled label="Email" name="email" placeholder="Enter your email"/>
                <TextInputLabeled label="Password" name="password" placeholder="Enter your password" type="password"/>
                <Button type="submit" className="mt-[16px]">Continue</Button>
            </Form>
        </Flex>
    )
}