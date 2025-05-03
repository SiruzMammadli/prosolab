import {SidebarNavigation} from "@/app/(protected)/admin/_components";

export default () => {
    return (
        <aside className="border-r-2 border-gray-200 p-[8px]">
            <header>
                <h3 className="p-[12px] text-2xl font-medium">PROSOLAB</h3>
            </header>
            <SidebarNavigation />
        </aside>
    )
}