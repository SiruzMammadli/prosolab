import {JSX, PropsWithChildren} from "react";
import {cn} from "@/src/utils";

export default ({children, as: Element = 'div', className: classes}: ContainerProps) => {
    return (
        <Element className={styles._(classes)}>
            {children}
        </Element>
    )
}

type ContainerProps = Readonly<PropsWithChildren<{
    as?: keyof JSX.IntrinsicElements;
    className?: string;
}>>;

const styles = {
    _: (classNames: ContainerProps["className"]) => cn(
        'container px-[16px] sm:px-0 mx-auto h-full',
        classNames,
    ),
}