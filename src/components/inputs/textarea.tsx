import {cn} from "@/src/utils";

export default (props: Readonly<TextareaProps>) => {
    return (
        <div
            className={cn(
                "border-2 border-gray-100 rounded-xl flex min-h-[60px]",
                props.className
            )}
        >
            <textarea
                className="resize-none w-full field-sizing-content p-[12px]"
                placeholder={props.placeholder}
                onChange={props.onChange}
            ></textarea>
        </div>
    )
}

type TextareaProps = {
    placeholder?: string;
    className?: string;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}