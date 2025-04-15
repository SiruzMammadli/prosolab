import {Container, Flex} from '@/src/components';
import {PropsWithChildren} from "react";

export default (props: Readonly<PropsWithChildren<{ title: React.ReactNode; description?: React.ReactNode }>>) => {
    return (
        <section className="py-[60px]">
            <Flex
                as={Container}
                direction="column"
                alignItems="center"

            >
                <header className="text-center md:w-[75%]">
                    <h2 className="text-[32px] md:text-[40px] font-medium mb-2">
                        {props.title}
                    </h2>
                    {props.description ? (
                        <p className="text-[14px] md:text-[16px] text-gray-500">
                            {props.description}
                        </p>
                    ) : null}
                </header>
                <main className="w-full">
                    {props.children}
                </main>
            </Flex>
        </section>
    )
}