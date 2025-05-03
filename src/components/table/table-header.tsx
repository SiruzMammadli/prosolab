import {cn} from "@/src/utils";

export function TableHeader(props: Readonly<React.PropsWithChildren<{ className?: string; }>>) {
    return (
        <th
            className={cn(
                "py-[12px] px-[16px] text-left font-medium text-gray-600 border-b-2 border-gray-200",
                props.className
            )}
        >
            {props.children}
        </th>
    )
}