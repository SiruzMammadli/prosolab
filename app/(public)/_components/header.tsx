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
                if (window.scrollY > 50 && window.scrollY > scroll) {
                    setHeaderClasses("-translate-y-[90px]")
                } else setHeaderClasses("");
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
                <Link href="/" className="text-2xl md:text-3xl font-semibold">
                    PROSOLAB
                    <sub className="text-[12px] text-red-600 ml-[2px]">BETA</sub>
                </Link>
                <Flex>
                    <Button className="h-[40px] px-4" href="/#get-a-quote">
                        Request a Quote
                    </Button>
                </Flex>
            </Flex>
        </header>
    )
}