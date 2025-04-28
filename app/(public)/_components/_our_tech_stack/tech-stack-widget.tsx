import {Widget} from "@/app/(public)/_components/_shared";
import {Flex} from "@/src/components";
import {ChevronLeftIcon} from "@/public/icons";
import {cn} from "@/src/utils";
import {TechStackWidgetItem} from "@/app/(public)/_components/_our_tech_stack";

export default ({stack}: Readonly<{
    stack: {
        title: string;
        items: Array<{ name: string; thumbnail: string;}>
    }
}>) => {
    return (
        <Widget className="p-0">
            <details className={cn(
                "overflow-clip [&[open]>summary>svg]:rotate-[-90deg]",
                "[&::details-content]:[block-size:0] [&::details-content]:transition-[block-size,content-visibility] [&::details-content]:duration-300 [&::details-content]:transition-discrete",
                "[&[open]::details-content]:[block-size:auto]"
            )}>
                <Flex
                    as="summary"
                    justifyContent="space-between"
                    className="list-none [&::-webkit-details-marker]:hidden p-6 cursor-pointer select-none"
                >
                    <p className="text-[15px] md:text-[18px] font-medium">{stack.title}</p>
                    <ChevronLeftIcon className="transition-transform w-[20px]! h-[20px]! md:w-[24px]! md:h-[24px]!"/>
                </Flex>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                    {Array.from(stack.items).map((item, key) => (
                        <TechStackWidgetItem key={key} item={item}/>
                    ))}
                </div>
            </details>
        </Widget>
    )
}