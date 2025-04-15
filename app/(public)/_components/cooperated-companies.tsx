'use client';
import 'swiper/css';
import 'swiper/css/autoplay';
import {Swiper, SwiperSlide} from "swiper/react";
import {Container, Flex} from "@/src/components";
import {Autoplay} from "swiper/modules";

export default () => {
    return (
        <section className="py-[30px_60px] md:py-[60px]">
            <Container>
                <Flex
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    className="text-center gap-y-[32px] mx-auto"
                >
                    <h3 className="w-full lg:w-[50%] text-gray-500 text-[14px] lg:text-[16px]">Delivering exceptional digital solutions and
                        innovation to
                        companies across various industries,
                        driving their success and growth.</h3>
                    <div className="w-full">
                        <Swiper
                            className="[&_.swiper-wrapper]:ease-linear!"
                            loop
                            slidesPerView={3}
                            spaceBetween="32px"
                            modules={[Autoplay]}
                            speed={10000}
                            autoplay={{delay: 0}}
                        >
                            {cooperatedCompanyList.map((company, index) => (
                                <SwiperSlide key={index} className="p-4">
                                    {company.name}
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </Flex>
            </Container>
        </section>
    )
}

const cooperatedCompanyList = [
    {
        name: "BIRACADEMY",
    },
    {
        name: "BIRACADEMY",
    },
    {
        name: "BIRACADEMY",
    },
    {
        name: "BIRACADEMY",
    },
    {
        name: "BIRACADEMY",
    }
]