import {Button} from "@/src/components";
import {cn} from "@/src/utils";

export default (props: Readonly<React.PropsWithChildren<{
    isCurrent: boolean;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}>>) => {
    return (
        <Button.Icon
            icon={() => props.children}
            className={cn(
                "w-[32px] h-[32px] rounded-lg",
                props.isCurrent && "pointer-events-none opacity-50"
            )}
            onClick={props.onClick}
        />
    )
}