import {Button} from "@/src/components";
import {cn} from "@/src/utils";

export default (props: Readonly<{
    icon: React.ElementType;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => (void | Promise<void>);
}>) => {
    return (
        <Button className="w-[45px] h-[45px] p-0" variant="outlined" onClick={props.onClick}>
            <props.icon className={cn(
                "w-[27px]! h-[27px]! p-0",
                props.className
            )}/>
        </Button>
    )
}