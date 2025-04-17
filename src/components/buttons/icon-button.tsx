import {Button} from "@/src/components";
import {cn} from "@/src/utils";

export default (props: Readonly<{
    icon: React.ElementType;
    className?: string;
}>) => {
    return (
        <Button className="w-[45px] h-[45px] p-0" variant="outlined">
            <props.icon className={cn(
                "w-[27px]! h-[27px]! p-0",
                props.className
            )}/>
        </Button>
    )
}