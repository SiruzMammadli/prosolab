import {Flex} from "@/src/components";
import {SidebarNavigationItem} from "@/app/(protected)/admin/_components";

export default () => {
    return (
        <nav className="mt-[24px]">
            <Flex as="ul" direction="column" className="gap-y-[4px]">
                {Array.from(navItems).map((item: NavItem, key: number) => (
                    <SidebarNavigationItem
                        key={key}
                        href={item.href}
                        content={item.content}
                    />
                ))}
            </Flex>
        </nav>
    )
}

type NavItem = { href: string, content: string };
const navItems: Set<NavItem> = new Set([
    {
        href: "",
        content: "Dashboard",
    },
    {
        href: "quotes",
        content: "Quotes"
    },
]);