import {Checkbox, Flex} from "@/src/components";
import {JSX, useId} from "react";
import {cn} from "@/src/utils";

export default (props: Readonly<CheckboxLabeledProps>) => {
    const uuid = useId();
    return (
        <Flex as={props.as} className={cn(
            "gap-x-[8px]",
            props.className
        )}>
            <Checkbox id={uuid} onChange={props.onChange}/>
            <label htmlFor={uuid} className="cursor-pointer">{props.label}</label>
        </Flex>
    )
}

type CheckboxLabeledProps = {
    label: string;
    as?: keyof JSX.IntrinsicElements;
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}