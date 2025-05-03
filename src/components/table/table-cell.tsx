import {cn} from "@/src/utils";

export function TableCell(props: Readonly<React.PropsWithChildren<{ className?: string; }>>) {
    return (
        <td
            className={cn(
                "py-[12px] px-[16px] border-b border-gray-200",
                props.className
            )}
        >
        {props.children}
        </td>
    )
}