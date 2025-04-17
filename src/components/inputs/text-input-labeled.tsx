import {TextInput} from "@/src/components";
import {useId} from "react";

export default (props: Readonly<TextInputLabeledProps>) => {
    const uuid = useId();
    return (
        <div className="w-full">
            <label
                htmlFor={uuid}
                className="block mb-[4px] text-gray-700"
            >
                {props.label}
            </label>
            <TextInput
                id={uuid}
                placeholder={props.placeholder}
            />
        </div>
    )
}

export type TextInputLabeledProps = {
    label: string;
    placeholder?: string;
}