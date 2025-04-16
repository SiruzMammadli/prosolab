import {TextGradient, Widget} from "@/app/(public)/_components/_shared";
import {SectionWithHeading} from "@/app/(public)/_components/index";
import {Flex} from "@/src/components";

export default () => {
    return (
        <SectionWithHeading
            title={<>What Our&nbsp;<TextGradient>Clients Are Saying</TextGradient></>}
            description="Hear from the businesses that trust Prosolab to transform their processes and deliver exceptional results"
        >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[64px]">
                {Array.from({length: 9}).map((_, key: number) => (
                    <Widget key={key}>
                        <Flex
                            direction="column"
                            className="gap-y-[32px]"
                        >
                            <p className="text-[14px] md:text-[15px]">
                                The mobile app they developed transformed our user experience. It's fast, intuitive and essential for enhancing customer satisfaction.
                            </p>
                            <Flex className="gap-x-[16px]">
                                <Flex
                                    justifyContent="center"
                                    className="bg-gray-500 w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full text-white"
                                >
                                    IMG
                                </Flex>
                                <Flex direction="column">
                                    <h3 className="text-[16px] md:text-[18px] font-medium">John Doe</h3>
                                    <p className="text-[12px] md:text-[13px] text-gray-500">CEO of AppVenture</p>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Widget>
                ))}
            </div>
        </SectionWithHeading>
    )
}