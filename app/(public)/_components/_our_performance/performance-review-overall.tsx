import {Flex} from "@/src/components";
import {cn} from "@/src/utils";

export default ({counter, description, title}: Readonly<{ counter: React.ReactNode, description: string; title: string; }>) => {
    return (
        <Flex
            as="article"
            direction="column"
            alignItems="center"
            justifyContent="space-between"
            className={cn(
                "text-center p-4 gap-y-[24px]",
                "md:nth-of-type-2:relative",
                "md:nth-of-type-2:before:absolute md:nth-of-type-2:before:w-[1px] md:nth-of-type-2:before:h-[60%] md:nth-of-type-2:before:top-1/2 md:nth-of-type-2:before:-left-[32px] md:nth-of-type-2:before:-translate-y-1/2 md:nth-of-type-2:before:bg-gray-200",
                "md:nth-of-type-2:after:absolute md:nth-of-type-2:after:w-[1px] md:nth-of-type-2:after:h-[60%] md:nth-of-type-2:after:top-1/2 md:nth-of-type-2:after:-right-[32px] md:nth-of-type-2:after:-translate-y-1/2 md:nth-of-type-2:after:bg-gray-200"
            )}
        >
            <Flex
                direction="column"
                alignItems="center"
                className="gap-y-[16px]"
            >
                <Flex as="h3" className="xl:text-[96px] text-[72px] font-medium leading-[1]">{counter}</Flex>
                <p className="text-gray-500">{description}</p>
            </Flex>
            <span className="text-blue-500 font-medium text-[16px]">{title}</span>
        </Flex>
    )
}