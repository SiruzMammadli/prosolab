import {Button} from "@/src/components";
import {cn} from "@/src/utils";

export default (props: Readonly<{
    number: string;
    isCurrent: boolean;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}>) => {
    return (
        <Button.Icon
            icon={() => (<>{props.number}</>)}
            className={cn(
                "w-[32px] h-[32px] rounded-lg",
                props.isCurrent && "text-gray-950"
            )}
            onClick={props.onClick}
        />
    )
}