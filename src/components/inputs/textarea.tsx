import {cn} from "@/src/utils";

export default (props: Readonly<TextareaProps>) => {
    return (
        <div
            className={cn(
                "border-2 border-gray-100 rounded-xl p-[12px]",
                props.className
            )}
        >
            <textarea className="resize-none w-full field-sizing-content" placeholder={props.placeholder}></textarea>
        </div>
    )
}

type TextareaProps = {
    placeholder?: string;
    className?: string;
}