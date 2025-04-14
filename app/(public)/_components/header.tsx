'use client';
import {Button, Container, Flex} from '@/src/components';
import Link from "next/link";
import {useLayoutEffect, useState} from "react";
import {cn, debounce} from "@/src/utils";

export default () => {
    const [_, setCurrentScroll] = useState<number>(0);
    const [headerClasses, setHeaderClasses] = useState<string>("");

    useLayoutEffect(() => {
        setCurrentScroll(window.scrollY);
        const handleScroll = debounce(() => {
            setCurrentScroll(scroll => {
                if (window.scrollY > scroll) {
                    setHeaderClasses("-translate-y-[90px]")
                }
                else setHeaderClasses("")
                return window.scrollY;
            });
        }, 100);

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={cn(
            "fixed top-0 inset-x-0 h-[80px] z-[1000] bg-white transition-transform duration-300",
            headerClasses
        )}>
            <Flex as={Container} justifyContent="space-between">
                <Link href="/" className="text-3xl font-semibold">PROSOLAB</Link>
                <Flex>
                    <Button className="h-10 px-4">
                        Request a Quote
                    </Button>
                </Flex>
            </Flex>
        </header>
    )
}