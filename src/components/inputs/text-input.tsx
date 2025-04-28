import {cn} from "@/src/utils";

export default ({type = "text", ...props}: Readonly<TextInputProps>) => {
    return (
        <div className={cn(
            "border-2 border-gray-100 rounded-xl h-[45px]",
            props.className,
        )}>
            <input
                id={props.id}
                type={type}
                className="w-full h-full px-[12px] placeholder:text-gray-500"
                placeholder={props.placeholder}
                onChange={props.onChange}
                name={props.name}
            />
        </div>
    )
}

export type TextInputProps = {
    className?: string;
    placeholder?: string;
    id?: string;
    type?: "text" | "password" | "email";
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string;
}