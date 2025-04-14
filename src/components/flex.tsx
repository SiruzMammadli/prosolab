import {JSX, PropsWithChildren} from "react";
import {cn} from "@/src/utils";

export default ({children, as: Element = 'div', className: classes, ...props}: FlexProps) => {
    return (
        <Element className={styles._(props, classes)}>
            {children}
        </Element>
    )
}

type FlexProps = Readonly<PropsWithChildren<{
    as?: keyof JSX.IntrinsicElements | React.ElementType;
    className?: string;
} & FlexCSSProps>>;

type FlexCSSProps = {
    inline?: boolean;
    direction?: 'column' | 'row';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
};

const styles = {
    _: (props: FlexCSSProps, classNames: FlexProps["className"]) => cn(
        props.inline ? 'inline-flex' : 'flex',
        props.direction === 'column' && 'flex-col',
        [
            (props.alignItems === 'center' || props.direction !== 'column') && 'items-center',
            !props.alignItems && props.direction === 'column' && 'items-stretch',
            props.alignItems === 'flex-start' && 'items-start',
            props.alignItems === 'flex-end' && 'items-end',
        ],
        [
            props.justifyContent === 'flex-start' && 'justify-start',
            props.justifyContent === 'flex-end' && 'justify-end',
            props.justifyContent === 'center' && 'justify-center',
            props.justifyContent === 'space-between' && 'justify-between',
            props.justifyContent === 'space-around' && 'justify-around',
        ],
        classNames
    ),
}