import {SectionWithHeading} from "@/app/(public)/_components";
import {TextGradient, Widget} from "@/app/(public)/_components/_shared";
import {Button, Flex} from "@/src/components";
import {ArrowRightIcon, DollarIcon, PhoneIcon} from "@/public/icons";

export default () => {
    return (
        <SectionWithHeading
            title={<>Flexible&nbsp;<TextGradient>Plans for Every Need</TextGradient></>}
            description="Choose the right solution for your business, whether you need ongoing support or a custom project approach"
        >
            <Flex
                className="mt-[64px] gap-y-[24px]"
                direction="column"
            >
                <Widget className="grid grid-cols-[3fr_2fr] gap-[64px]">
                    <div>
                        <Flex>
                            <TextGradient as="h2" className="text-[32px] font-medium leading-[1.6]">Monthly Plan</TextGradient>
                        </Flex>
                        <p className="text-[14px] text-gray-500">Designed for businesses with continuous development needs, offering flexibility and fast support to keep your projects on track.</p>
                        <Flex className="mt-[32px] gap-x-[4px]" alignItems="flex-end">
                            <Flex
                                as="p"
                                className="text-[48px] font-medium leading-[1]"
                                alignItems="flex-start"
                            >
                                <DollarIcon className="w-[27px]! h-[27px]! mt-[6px]"/>3000
                            </Flex>
                            <p className="text-gray-700 text-[14px]">/ per month</p>
                        </Flex>
                        <Flex
                            className="gap-[16px] mt-[48px]"
                        >
                            <Button className="flex-1">
                                <span>Subscribe</span>
                                <ArrowRightIcon className="w-[20px]! h-[20px]!"/>
                            </Button>
                            <Button className="flex-1" variant="outlined">
                                <PhoneIcon className="w-[20px]! h-[20px]!"/>
                                <span>Book a Consultation</span>
                            </Button>
                        </Flex>
                    </div>
                </Widget>
                <Widget className="grid grid-cols-[3fr_2fr] gap-[64px]">
                    <div>
                        <Flex>
                            <TextGradient as="h2" className="text-[32px] font-medium leading-[1.6]">Custom Plan</TextGradient>
                        </Flex>
                        <p className="text-[14px] text-gray-500">For businesses with specific project requirements or one-time development needs.</p>
                        <Flex
                            className="gap-[16px] mt-[48px]"
                        >
                            <Button className="flex-1" variant="outlined">
                                <PhoneIcon className="w-[20px]! h-[20px]!"/>
                                <span>Book a Consultation</span>
                            </Button>
                        </Flex>
                    </div>
                </Widget>
            </Flex>
        </SectionWithHeading>
    )
}