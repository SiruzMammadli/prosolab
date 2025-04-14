import {PropsWithChildren} from "react";
import {cn} from "@/src/utils";

export default ({children, ...props}: Readonly<PropsWithChildren<{ className?: string; }>>) => {
    return (
        <article className={
            cn("border-2 border-gray-200 rounded-2xl p-6", props.className)
        }>
            {children}
        </article>
    )
}