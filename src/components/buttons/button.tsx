import {PropsWithChildren} from "react";
import {cn} from "@/src/utils";
import Link from "next/link";
import IconButton from './icon-button';
import {Spinner} from "@/src/components";

export default function Button(
    {
        children,
        href,
        onClick,
        className: classes,
        variant = 'primary',
        type = 'button',
        ...props
    }: Readonly<PropsWithChildren<ButtonProps>>
) {
    return href ? (
        <Link aria-disabled={props.disabled} href={href} className={styles._(classes, variant)} {...props}>
            {props.disabled ? (
                <>
                    <Spinner/>
                    {props.spinnercontent ? <span>{props.spinnercontent}</span> : null}
                </>
            ) : children}
        </Link>
    ) : (
        <button aria-disabled={props.disabled} type={type} className={styles._(classes, variant)} onClick={onClick} {...props}>
            {props.disabled ? (
                <>
                    <Spinner/>
                    {props.spinnercontent ? <span>{props.spinnercontent}</span> : null}
                </>
            ) : children}
        </button>
    )
}

type ButtonProps = {
    href?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => (void | Promise<void>);
    className?: string;
    variant?: "primary" | "outlined" | "gradient";
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    spinnercontent?: string;
}

const styles = {
    _: (classNames?: string, variant?: ButtonProps["variant"]) => cn(
        'cursor-pointer px-6 h-[50px] rounded-xl content-center text-center flex items-center justify-center transition-colors [&_svg]:w-[20px] [&_svg]:h-[20px] gap-x-2',
        [
            variant === 'primary' && 'bg-blue-500 text-white border-[2px] border-blue-500 hover:bg-blue-400 hover:border-blue-400',
            variant === 'outlined' && 'border-[2px] border-gray-200 text-gray-600 font-medium',
            variant === 'gradient' && [
                'relative isolate before:absolute before:rounded-xl before:inset-0 before:bg-gradient-to-r before:from-blue-500 before:to-indigo-400 before:-z-1',
                'after:absolute after:inset-[2px] after:bg-black after:rounded-[10px] after:-z-1',
            ]
        ],
        "[&[aria-disabled=true]]:pointer-events-none [&[aria-disabled=true]]:opacity-50",
        classNames,
    ),
}

Button.Icon = IconButton;