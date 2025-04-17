'use client';
import {cn} from "@/src/utils";
import {useState} from "react";

export default (props: Readonly<CheckboxProps>) => {
    const [isChecked, setChecked] = useState(false);
    return (
        <div
            className={cn(
                "w-[16px] h-[16px] border-2 border-gray-200 rounded-sm cursor-pointer relative",
                "before:font-semibold before:w-[13px] before:h-[13px] before:text-[13px]",
                "before:absolute before:-top-[4px] before:left-[2px]",
                isChecked && "before:content-['✓']"
            )}
            onClick={() => setChecked(state => !state)}
        >
            <input id={props.id} type="checkbox" className="hidden w-full h-full" defaultChecked={isChecked}/>
        </div>
    )
}

type CheckboxProps = {
    id?: string;
}