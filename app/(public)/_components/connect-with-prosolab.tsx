'use client';
import {TextGradient} from "@/app/(public)/_components/_shared";
import {Flex} from "@/src/components";
import {useState} from "react";
import {cn} from "@/src/utils";
import {GetAQuote} from "@/app/(public)/_components/_connect_with_prosolab";

export default () => {
    const [activeTabId, setActiveTabId] = useState<number>(tabList[0].id);

    return (
        <section id="get-a-quote" className="py-[30px] md:py-[60px]">
            <Flex
                direction="column"
                alignItems="center"
                className="px-[16px] max-md:container md:px-0 md:w-[640px] mx-auto"
            >
                <header className="text-center">
                    <h2 className="text-[32px] md:text-[40px] font-medium mb-2">
                        <TextGradient>Connect with Prosolab</TextGradient> - Your Journey Starts Here
                    </h2>
                    <p className="text-[14px] md:text-[15px] text-gray-500">
                        Ready to take the next step? Book a call or fill out our form to connect with our team. We're
                        here to turn your vision into reality
                    </p>
                </header>
                <main className="w-full">
                    <div className="mt-[64px]">
                        <header className="mb-[16px]">
                            <Flex className="bg-gray-50 h-[50px] border-2 border-gray-100 rounded-xl p-[4px]">
                                {tabList.map((tab: TabItem) => (
                                    <button
                                        key={tab.id}
                                        className={cn(
                                            "h-full rounded-[8px] flex-1 text-gray-500 cursor-default!",
                                            tab.id === activeTabId && "bg-white shadow-sm text-black"
                                        )}
                                        // onClick={() => setActiveTabId(tab.id)}
                                    >
                                        {tab.content}
                                    </button>
                                ))}
                            </Flex>
                        </header>
                        <GetAQuote />
                    </div>
                </main>
            </Flex>
        </section>
    )
}

type TabItem = { id: number; content: string; }
const tabList: Array<TabItem> = [
    {
        id: 1,
        content: "Get a Quote",
    },
    // {
    //     id: 2,
    //     content: "Book a Call",
    // }
];