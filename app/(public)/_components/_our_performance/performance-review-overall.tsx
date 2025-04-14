import {Flex} from "@/src/components";

export default ({counter, description, title}: Readonly<{ counter: React.ReactNode, description: string; title: string; }>) => {
    return (
        <Flex
            as="article"
            direction="column"
            alignItems="center"
            className="text-center p-4 gap-y-4"
        >
            <Flex as="h3" className="text-[96px] font-medium leading-[1]">{counter}</Flex>
            <p className="text-gray-500">{description}</p>
            <span className="text-blue-500 font-medium text-[16px]">{title}</span>
        </Flex>
    )
}