import {SectionWithHeading} from "@/app/(public)/_components/index";
import {PerformanceReviewOverall} from "@/app/(public)/_components/_our_performance";
import {TextGradient} from "@/app/(public)/_components/_shared";
import {PercentIcon, PlusIcon} from "@/public/icons";

export default () => {
    return (
        <SectionWithHeading
            title={<><TextGradient>Our Performance</TextGradient>&nbsp;at a Glance</>}
        >
            <div className="grid grid-cols-3 gap-x-[64px] mt-6">
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
                    className="w-[64px]! h-[64px]!"
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
                    className="w-[64px]! h-[64px]!"
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
                    className="w-[64px]! h-[64px]!"
                />
            </>
        ),
        description: "Our solutions reduce operational complexity, increasing business efficiency by 40% on average",
        title: "Efficiency",
    },
];