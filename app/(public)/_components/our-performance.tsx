import {SectionWithHeading} from "@/app/(public)/_components/index";
import {PerformanceReviewOverall} from "@/app/(public)/_components/_our_performance";
import {TextGradient} from "@/app/(public)/_components/_shared";
import {PercentIcon, PlusIcon} from "@/public/icons";

export default () => {
    return (
        <SectionWithHeading
            title={<><TextGradient>Our Performance</TextGradient>&nbsp;at a Glance</>}
        >
            <div className="grid md:grid-cols-3 gap-[64px] mt-6">
                {
                    performanceItems.map((item, key) => (
                        <PerformanceReviewOverall
                            key={key}
                            counter={item.counter}
                            description={item.description}
                            title={item.title}
                        />
                    ))
                }
            </div>
        </SectionWithHeading>
    )
}

type PerformanceItem = {
    counter: React.ReactNode;
    description: string;
    title: string;
}
const performanceItems: Array<PerformanceItem> = [
    {
        counter: (
            <>
                98
                <PercentIcon
                    className="xl:w-[64px]! xl:h-[64px]! w-[48px]! h-[48px]!"
                />
            </>
        ),
        description: "Client retention rate, driven by our commitment to delivering tailored solutions",
        title: "Customer Satisfaction",
    },
    {
        counter: (
            <>
                500
                <PlusIcon
                    className="xl:w-[64px]! xl:h-[64px]! w-[48px]! h-[48px]!"
                />
            </>
        ),
        description: "Over 500 businesses transformed through our digital solutions, resulting in measurable growth",
        title: "Business Impact",
    },
    {
        counter: (
            <>
                40
                <PercentIcon
                    className="xl:w-[64px]! xl:h-[64px]! w-[48px]! h-[48px]!"
                />
            </>
        ),
        description: "Our solutions reduce operational complexity, increasing business efficiency by 40% on average",
        title: "Efficiency",
    },
];