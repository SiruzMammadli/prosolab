import {cn} from "@/src/utils";

export function TableRow(props: Readonly<React.PropsWithChildren<{ className?: string; }>>) {
    return (
        <tr
            className={cn(
                "hover:bg-gray-50 transition-colors",
                props.className)}
        >
            {props.children}
        </tr>
    )
}