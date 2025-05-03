'use client';
import {useSelectedLayoutSegment} from "next/navigation";
import Link from "next/link";
import {cn} from "@/src/utils";

export default ({href, content}: Readonly<{href: string; content: string;}>) => {
    const segment = useSelectedLayoutSegment() ?? "";
    return (
        <li>
            <Link
                href={`/admin/${href}`}
                className={cn(
                    "block py-[8px] px-[12px] rounded-md text-[14px] text-gray-700",
                    segment === href && 'bg-gray-100 text-black',
                )}
            >
                {content}
            </Link>
        </li>
    )
}