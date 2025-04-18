import {
    ConnectWithProsolabSection,
    CooperatedCompaniesSection,
    HeroSection, OurClientsSayingSection,
    OurExpertServicesSection,
    OurPerformanceSection, OurPlansSection
} from "@/app/(public)/_components";

export default () => {
    return (
        <>
            <HeroSection/>
            {/*<CooperatedCompaniesSection/>*/}
            <OurPerformanceSection/>
            {/*<OurExpertServicesSection/>*/}
            <OurPlansSection/>
            {/*<OurClientsSayingSection/>*/}
            <ConnectWithProsolabSection/>
        </>
    );
}
