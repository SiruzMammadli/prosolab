'use client';
import {TextGradient} from "@/app/(public)/_components/_shared";
import {SectionWithHeading} from "@/app/(public)/_components";
import {TechStackWidget} from "@/app/(public)/_components/_our_tech_stack";
import {useQuery} from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import {SomethingWentWrong} from "@/src/components";
import axios from "axios";

export default () => {
    const {data: techStackData, error, refetch} = useQuery({
        queryKey: ["technologies"],
        queryFn: async () => {
            return (await axios.get(process.env.NEXT_PUBLIC_API_V1_URL + "/technologies", {timeout: 5000})).data;
        },
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });
    return (
        <SectionWithHeading
            title={<><TextGradient>Our Technology Stack:</TextGradient>&nbsp;Powering Innovation with Modern Tools</>}
            description="At Prosolab, we harness the power of the latest and most reliable technologies to build high-performing digital solutions. From front-end frameworks to back-end architectures and cloud platforms, our expertise spans a broad tech spectrum — ensuring speed, scalability, and seamless user experiences."
        >
            <div className="grid gap-y-2 mt-[64px]">
                {!error ? (
                    techStackData ? techStackData.map((stack: TechStackData, key: number) => (
                        <TechStackWidget
                            key={key}
                            stack={stack}
                        />
                    )) : (
                        <Skeleton count={3} className="h-[75px]" borderRadius={16}/>
                    )
                ) : (
                    <SomethingWentWrong onClick={async () => {
                        await refetch();
                    }}/>
                )}
            </div>
        </SectionWithHeading>
    )
}

type TechStackData = {
    title: string;
    items: Array<{ name: string; thumbnail: string; }>
};