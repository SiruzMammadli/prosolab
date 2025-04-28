import {CheckboxLabeled, Flex} from "@/src/components";
import {useQuote} from "@/app/(public)/_components/_connect_with_prosolab/get-a-quote";

export default () => {
    const {setCheckedServices} = useQuote();
    return (
        <Flex
            direction="column"
            className="gap-y-[16px]"
        >
            <p>Services you need</p>
            <ul className="grid xs:grid-cols-2 gap-[16px] [&_label]:text-[14px] md:[&_label]:text-[15px] [&_label]:text-gray-700">
                {Array.from(serviceCheckboxList).map((checkbox: ServiceCheckboxItem, key: number) => (
                    <CheckboxLabeled
                        key={key}
                        as="li"
                        label={checkbox.label}
                        onChange={({target}) => setCheckedServices(state => {
                            if (!target.checked && state.get(checkbox.tag)) state.delete(checkbox.tag);
                            else state.set(checkbox.tag, target.checked)
                            return new Map([...state]);
                        })}
                    />
                ))}
            </ul>
        </Flex>
    )
}

export type ServiceCheckboxItem = { tag: string; label: string; }
const serviceCheckboxList: Set<ServiceCheckboxItem> = new Set([
    {tag: "webapp", label: "Web App Development",},
    {tag: "mobile", label: "Mobile App Development",},
    {tag: "api", label: "API Development",}
] as const);