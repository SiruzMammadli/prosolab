import {SidebarLogoutButton, SidebarNavigation} from "@/app/(protected)/admin/_components";
import {Flex} from "@/src/components";
import Link from "next/link";

export default () => {
    return (
        <aside className="border-r-2 border-gray-200 p-[8px]">
            <Flex as="header" justifyContent="space-between">
                <Link href="/admin" className="p-[12px] text-2xl font-medium">PROSOLAB</Link>
                <SidebarLogoutButton/>
            </Flex>
            <SidebarNavigation />
        </aside>
    )
}