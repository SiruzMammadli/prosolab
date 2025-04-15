import {Button, Container, Flex} from '@/src/components';
import {cn} from "@/src/utils";
import {TextGradient} from "@/app/(public)/_components/_shared";
import {ArrowRightIcon, PhoneIcon} from "@/public/icons";

export default () => {
    return (
        <section className="py-[120px_60px]">
            <Container>
                <Flex
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    className="text-center gap-y-8 mx-auto md:w-[730px]"
                >
                    <h1 className="text-[30px] md:text-6xl font-medium leading-[1.4]">Transform&nbsp;
                        <TextGradient>Your Business</TextGradient>
                        <Flex justifyContent="center">
                            {/*<div className="inline-block bg-blue-500 rounded-full w-[120px] h-[54px] mr-16 relative">*/}
                            {/*    <span*/}
                            {/*        className={cn(*/}
                            {/*            "absolute top-1/2 left-[40px] -translate-y-1/2 h-[4px] w-[120px] bg-black",*/}
                            {/*        )}/>*/}
                            {/*    <ArrowRightIcon*/}
                            {/*        className="w-[48px]! h-[48px]! absolute top-1/2 -translate-y-1/2 -right-[50px]"*/}
                            {/*    />*/}
                            {/*</div>*/}
                            With Cutting-Edge
                        </Flex>
                        Software&nbsp;
                        <TextGradient>Development</TextGradient>
                    </h1>
                    <p className="font-light text-gray-500 text-[14px]">
                        From web and mobile applications to third-party integrations and Discord bot development, we
                        craft scalable, custom solutions to drive your business forward. Specializing in React and
                        modern technologies, we ensure seamless, future-proof digital experiences.
                    </p>
                    <Flex className="gap-[16px] mt-4 flex-col md:flex-row">
                        <Button variant="outlined" className="w-full md:w-max">
                            Explore Our Services
                        </Button>
                        <Button className="w-full md:w-max">
                            <PhoneIcon/>
                            <span>Get a Free Consultation</span>
                        </Button>
                    </Flex>
                </Flex>
            </Container>
        </section>
    )
}