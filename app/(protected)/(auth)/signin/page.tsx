import {Button, Flex, TextInputLabeled} from "@/src/components";

export default () => {
    return (
        <Flex
            direction="column"
            className="p-[24px] gap-y-[16px] max-w-[450px] w-full border-2 border-gray-100 rounded-xl shadow-md"
        >
            <h1 className="text-[27px] font-medium text-center">Sign in</h1>
            <form className="flex flex-col gap-y-[12px]">
                <TextInputLabeled label="Email" placeholder="Enter your email"/>
                <TextInputLabeled label="Password" placeholder="Enter your password" type="password"/>
                <Button className="mt-[16px]">Continue</Button>
            </form>
        </Flex>
    )
}