import {Button, Container, Flex} from '@/src/components';
import {TextGradient} from "@/app/(public)/_components/_shared";

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
                            With Cutting-Edge
                        </Flex>
                        Software&nbsp;
                        <TextGradient>Development</TextGradient>
                    </h1>
                    <p className="font-light text-gray-500 text-[14px] md:text-[15px]">
                        From web and mobile applications to third-party integrations, we
                        craft scalable, custom solutions to drive your business forward. Specializing in modern technologies, we ensure seamless, future-proof digital experiences.
                    </p>
                    <Flex className="gap-[16px] mt-4 flex-col md:flex-row">
                        {/*<Button variant="outlined" className="w-full md:w-max">*/}
                        {/*    Explore Our Services*/}
                        {/*</Button>*/}
                        {/*<Button className="w-full md:w-max">*/}
                        {/*    <PhoneIcon/>*/}
                        {/*    <span>Get a Free Consultation</span>*/}
                        {/*</Button>*/}
                        <Button className="w-full md:w-max" href="/#get-a-quote">
                            Request a Quote
                        </Button>
                    </Flex>
                </Flex>
            </Container>
        </section>
    )
}