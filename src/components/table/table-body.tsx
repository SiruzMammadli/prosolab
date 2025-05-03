import {cn} from "@/src/utils";

export function TableBody(props: Readonly<React.PropsWithChildren<{ className?: string; }>>) {
    return (
        <tbody
            className={cn(
                "",
                props.className
            )}
        >
            {props.children}
        </tbody>
    )
}