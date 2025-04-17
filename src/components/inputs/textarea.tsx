export default (props: Readonly<TextareaProps>) => {
    return (
        <div
            className="border-2 border-gray-100 rounded-xl p-[12px]"
        >
            <textarea className="resize-none w-full field-sizing-content" placeholder={props.placeholder}></textarea>
        </div>
    )
}

type TextareaProps = {
    placeholder?: string;
}