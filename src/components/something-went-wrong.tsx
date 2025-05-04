import {Button, Flex} from "@/src/components/index";
import {cn} from "@/src/utils";

export default (props: Readonly<{
    onClick?: (event: React.MouseEvent<HTMLElement>) => (Promise<void> | void);
    className?: string;
}>) => {
    return (
        <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            className={cn("text-[20px] font-medium gap-y-[8px]", props.className)}
        >
            <h3>Oh no, something went wrong!</h3>
            <Button
                variant="outlined"
                className="h-[40px] text-[15px]"
                onClick={props.onClick}
            >
                Refresh
            </Button>
        </Flex>
    )
}