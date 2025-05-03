import {cn} from "@/src/utils";

export function TableHead(props: Readonly<React.PropsWithChildren<{ className?: string; }>>) {
    return (
        <thead className={cn("", props.className)}>
        {props.children}
        </thead>
    )
}