import {Button, Container, Flex} from "@/src/components";
import Link from "next/link";
import {FacebookIcon, InstagramIcon, XLogoIcon} from "@/public/icons";

export default () => {
    return (
        <footer className="border-t border-gray-200">
            <Container>
                <Flex
                    as="section"
                    alignItems="flex-start"
                    justifyContent="space-between"
                    className="h-[500px] py-[48px_24px]"
                >
                    <Flex
                        as="section"
                        direction="column"
                        justifyContent="space-between"
                        className="h-full max-w-[270px]"
                    >
                        <div>
                            <Link href="/" className="font-medium text-[24px] mb-[8px] inline-block">
                                PROSOLAB
                            </Link>
                            <p className="text-gray-500 text-[13px]">Transform your business with cutting edge Software
                                Development.</p>
                        </div>
                        <Flex
                            direction="column"
                            className="mt-[50px]"
                        >
                            <h3 className="text-[21px]">Follow us Social Media</h3>
                            <Flex as="ul" className="mt-[16px] gap-[12px]">
                                <li>
                                    <Button.Icon icon={XLogoIcon} className="scale-[1.8]"/>
                                </li>
                                <li>
                                    <Button.Icon icon={InstagramIcon}/>
                                </li>
                                <li>
                                    <Button.Icon icon={FacebookIcon} className="scale-[1.1]"/>
                                </li>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex
                        as="section"
                        alignItems="flex-start"
                        className="gap-[64px]"
                    >
                        {Array.from(footerArticles).map((article: FooterArticle, key: number) => (
                            <Flex
                                as="article"
                                direction="column"
                                className="gap-y-[8px]"
                                key={key}
                            >
                                <h3 className="text-[16px] font-medium">{article.title}</h3>
                                <ul>
                                    {Array.from(article.links).map((link: FooterArticleLink, key: number) => (
                                        <li key={key}>
                                            <Link
                                                href={link.href}
                                                className="text-[13px] text-gray-500 block my-[8px]"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </Flex>
                        ))}
                    </Flex>
                </Flex>
                <Flex as="section" justifyContent="space-between" className="py-[24px]">
                    <p>@2025 Prosolab, All Right Reserved</p>
                    <Flex as="ul" className="gap-[16px]">
                        <li>
                            <Link href="#">Privacy</Link>
                        </li>
                        <li>
                            <Link href="#">Terms</Link>
                        </li>
                        <li>
                            <Link href="#">Cookies</Link>
                        </li>

                    </Flex>
                </Flex>
            </Container>
        </footer>
    )
}

type FooterArticleLink = { href: string; label: string; }
type FooterArticle = { title: string; links: Set<FooterArticleLink>; };

const footerArticles: Set<FooterArticle> = new Set([
    {
        title: "Company",
        links: new Set([
            {
                href: "#",
                label: "About Us",
            },
            {
                href: "#",
                label: "Our Services",
            },
            {
                href: "#",
                label: "Contact Us",
            },
        ]),
    },
    {
        title: "Services",
        links: new Set([
            {
                href: "#",
                label: "Web Development",
            },
            {
                href: "#",
                label: "Mobile App Development",
            },
            {
                href: "#",
                label: "Custom Software Solutions",
            },
            {
                href: "#",
                label: "API Integrations",
            },
            {
                href: "#",
                label: "Automation Tools",
            },
        ]),
    },
    {
        title: "Support",
        links: new Set([
            {
                href: "#",
                label: "Help Center",
            },
            {
                href: "#",
                label: "FAQs",
            },
            {
                href: "#",
                label: "Privacy Policy",
            },
            {
                href: "#",
                label: "Terms & Conditions",
            },
            {
                href: "#",
                label: "Request a Quote",
            },
        ]),
    }
]);