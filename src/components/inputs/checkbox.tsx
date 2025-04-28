import {cn} from "@/src/utils";

export default (props: Readonly<CheckboxProps>) => {
    return (
        <input
            id={props.id}
            type="checkbox"
            className={cn(
                "appearance-none w-[16px] h-[16px] border-2 border-gray-200 rounded-sm cursor-pointer relative",
                "before:font-semibold before:w-[13px] before:h-[13px] before:text-[13px]",
                "before:absolute before:-top-[4px] before:left-[2px]",
                "[&:checked]:before:content-['✓']"
            )}
            onChange={props.onChange}
        />
    )
}

type CheckboxProps = {
    id?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}