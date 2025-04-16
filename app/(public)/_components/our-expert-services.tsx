import {SectionWithHeading} from "@/app/(public)/_components";
import {TextGradient} from "@/app/(public)/_components/_shared";
import {ExpertServiceWidget, type ExpertServiceWidgetType} from "@/app/(public)/_components/_our_services";
import {MobileAppIcon, WebAppIcon} from "@/public/icons";
import {Flex} from "@/src/components";


const expertServiceWidgets: Array<ExpertServiceWidgetType> = [
    {
        icon: WebAppIcon,
        title: "Web App Development",
        description: "Build fast, scalable web applications using React, Next.js and TailwindCSS to meet modern business needs."
    },
    {
        icon: MobileAppIcon,
        title: "Mobile App Development",
        description: "Create feature-rich mobile applications with React Native and Android Native (Xamarin) for seamless user experiences."
    },
    {
        icon: () => (<Flex justifyContent="center"
                           className="bg-blue-500 px-[6px] rounded-sm text-white text-[14px]">API</Flex>),
        title: "API Development",
        description: "Build secure, scalable APIs with NodeJS, REST API, GraphQL and WebSockets to power your digital ecosystem."
    },
]

export default () => {
    return (
        <SectionWithHeading
            title={<>Our Expert Services:&nbsp;<TextGradient>Tailored for Your Success</TextGradient></>}
            description="At Prosolab, we provide a wide range of digital services designed to elevate your business. From software development to seamless integrations, we ensure every solution is customized to meet you specific needs. Explore our 8 core services below"
        >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-[64px]">
                {expertServiceWidgets.map((widget: ExpertServiceWidgetType, key: number) => (
                    <ExpertServiceWidget
                        key={key}
                        icon={widget.icon}
                        title={widget.title}
                        description={widget.description}
                    />
                ))}
            </div>
        </SectionWithHeading>
    )
}