'use client';
import {TextGradient} from "@/app/(public)/_components/_shared";
import {Button, CheckboxLabeled, Flex, Textarea, TextInputLabeled} from "@/src/components";
import {useState} from "react";
import {cn} from "@/src/utils";

export default () => {
    const [activeTabId, setActiveTabId] = useState<number>(tabList[0].id);
    const [selectedBudget, setSelectedBudget] = useState<number>(0);
    return (
        <section id="get-a-quote" className="py-[30px] md:py-[60px]">
            <Flex
                direction="column"
                alignItems="center"
                className="px-[16px] md:px-0 md:w-[640px] mx-auto"
            >
                <header className="text-center">
                    <h2 className="text-[32px] md:text-[40px] font-medium mb-2">
                        <TextGradient>Connect with Prosolab</TextGradient> - Your Journey Starts Here
                    </h2>
                    <p className="text-[14px] md:text-[16px] text-gray-500">
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
                                            "h-full rounded-[8px] flex-1 text-gray-500",
                                            tab.id === activeTabId && "bg-white shadow-sm text-black"
                                        )}
                                        onClick={() => setActiveTabId(tab.id)}
                                    >
                                        {tab.content}
                                    </button>
                                ))}
                            </Flex>
                        </header>
                        <form>
                            <Flex
                                direction="column"
                                className="gap-y-[32px]"
                            >
                                <Flex className="gap-[16px] xs:flex-row" direction="column">
                                    <TextInputLabeled label="Name" placeholder="Enter full name" className="[&_[type=checkbox]]:text-[14px] md:[&_[type=checkbox]]:text-[14px]"/>
                                    <TextInputLabeled label="Email" placeholder="your@company.com" className="[&_[type=checkbox]]:text-[14px] md:[&_[type=checkbox]]:text-[14px]"/>
                                </Flex>
                                <Flex
                                    direction="column"
                                    className="gap-y-[16px]"
                                >
                                    <p>Services you need</p>
                                    <ul className="grid xs:grid-cols-2 gap-[16px] [&_label]:text-[14px] md:[&_label]:text-[15px] [&_label]:text-gray-700">
                                        <CheckboxLabeled as="li" label="Bot Development"/>
                                        <CheckboxLabeled as="li" label="Desktop Development"/>
                                        <CheckboxLabeled as="li" label="Web App Development"/>
                                        <CheckboxLabeled as="li" label="Website Development"/>
                                        <CheckboxLabeled as="li" label="Extension Development"/>
                                        <CheckboxLabeled as="li" label="API Development"/>
                                    </ul>
                                </Flex>
                                <Flex
                                    direction="column"
                                    className="gap-y-[4px]"
                                >
                                    <p>Your Budget</p>
                                    <div className="grid xs:grid-cols-3 gap-[4px]">
                                        <Button
                                            variant="outlined"
                                            className={cn(
                                                "h-[45px] border-gray-100",
                                                selectedBudget === 0 && 'border-gray-200 text-black'
                                            )}
                                            onClick={() => setSelectedBudget(0)}
                                        >
                                            $1k-5k
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            className={cn(
                                                "h-[45px] border-gray-100",
                                                selectedBudget === 1 && 'border-gray-200 text-black'
                                            )}
                                            onClick={() => setSelectedBudget(1)}
                                        >
                                            $5k-8k
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            className={cn(
                                                "h-[45px] border-gray-100",
                                                selectedBudget === 2 && 'border-gray-200 text-black'
                                            )}
                                            onClick={() => setSelectedBudget(2)}
                                        >
                                            $10k+
                                        </Button>
                                    </div>
                                </Flex>
                                <Flex
                                    direction="column"
                                    className="gap-y-[4px]"
                                >
                                    <p>Tell us about your project</p>
                                    <Textarea placeholder="Share your project details..." className="text-[14px] md:text-[15px]"/>
                                </Flex>
                                <Button variant="primary">
                                    Submit a Request
                                </Button>
                            </Flex>
                        </form>
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
    {
        id: 2,
        content: "Book a Call",
    }
];