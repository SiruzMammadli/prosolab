import {Widget} from "@/app/(public)/_components/_shared";
import {Flex} from "@/src/components";

export type ExpertServiceWidgetType = { icon: React.ElementType; title: string; description: string; }

export default (props: Readonly<ExpertServiceWidgetType>) => {
    return (
        <Widget>
            <Flex
                direction="column"
                justifyContent="space-between"
                className="gap-y-[48px]"
            >
                <Flex
                    justifyContent="center"
                    className="border-2 border-gray-200 rounded-xl w-[54px] h-[54px]"
                >
                    <props.icon className="w-[30px]! h-[30px]! text-blue-500"/>
                </Flex>
                <Flex
                    direction="column"
                    className="gap-y-[8px]"
                >
                    <h4 className="text-[18px] font-medium">{props.title}</h4>
                    <p className="text-[14px] text-gray-500">{props.description}</p>
                </Flex>
            </Flex>
        </Widget>
    )
}