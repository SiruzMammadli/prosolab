import {JSX, PropsWithChildren} from "react";
import {cn} from "@/src/utils";

export default ({children, as: Element = 'span', ...props}: Readonly<PropsWithChildren<TextGradientProps>>) => {
    return (
        <Element className={styles._(props.className)}>
            {children}
        </Element>
    )
}

type TextGradientProps = {
    as?: keyof JSX.IntrinsicElements;
    className?: string;
}

const styles = {
    _: (classNames?: string) => cn(
        'bg-[linear-gradient(to_right,#2b7fff,#a684ff_60%,#a684ff_80%,#c6d2ff)] inline bg-clip-text text-transparent',
        classNames,
    ),
}