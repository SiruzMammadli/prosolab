import {Button} from "@/src/components";
import {cn} from "@/src/utils";

export default (props: Readonly<{
    icon: React.ElementType;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => (void | Promise<void>);
    disabled?: boolean;
}>) => {
    return (
        <Button
            className={cn("w-[45px] h-[45px] p-0", props.className)}
            variant="outlined"
            onClick={props.onClick}
            disabled={props.disabled}
        >
            <props.icon className="w-[27px]! h-[27px]! p-0"/>
        </Button>
    )
}