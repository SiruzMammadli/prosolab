import {Footer, Header} from "@/app/(public)/_components";
import {PropsWithChildren} from "react";

export default ({children}: Readonly<PropsWithChildren>) => {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}