'use client';
import {TextGradient} from "@/app/(public)/_components/_shared";
import {SectionWithHeading} from "@/app/(public)/_components";
import {TechStackWidget} from "@/app/(public)/_components/_our_tech_stack";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

export default () => {
    const {data: techStackData} = useQuery({
        queryKey: ["technologies"],
        queryFn: async () => {
            return (await axios.get("/api/v1/technologies")).data;
        }
    });
    return (
        <SectionWithHeading
            title={<><TextGradient>Our Technology Stack:</TextGradient>&nbsp;Powering Innovation with Modern Tools</>}
            description="At Prosolab, we harness the power of the latest and most reliable technologies to build high-performing digital solutions. From front-end frameworks to back-end architectures and cloud platforms, our expertise spans a broad tech spectrum — ensuring speed, scalability, and seamless user experiences."
        >
            <div className="grid gap-y-2 mt-[64px]">
                {techStackData ? techStackData.map((stack: TechStackData, key: number) => (
                    <TechStackWidget
                        key={key}
                        stack={stack}
                    />
                )) : (
                    <Skeleton count={2} className="h-[75px]" borderRadius={16}/>
                )}
            </div>
        </SectionWithHeading>
    )
}

type TechStackData = {
    title: string;
    items: Array<{ name: string; thumbnail: string; }>
};