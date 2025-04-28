'use client';
import {Flex, TextInputLabeled} from "@/src/components";
import {debounce} from "@/src/utils";
import {useQuote} from "@/app/(public)/_components/_connect_with_prosolab/get-a-quote";

export default () => {
    const {inputValues, setInputValues} = useQuote();
    return (
        <Flex className="gap-[16px] xs:flex-row" direction="column">
            <TextInputLabeled
                name="fullname"
                label="Name"
                placeholder="Enter full name"
                className="[&_[type=checkbox]]:text-[14px] md:[&_[type=checkbox]]:text-[14px]"
                onChange={debounce(({target}) => setInputValues({
                    ...inputValues,
                    fullname: target.value,
                }), 500)}
            />
            <TextInputLabeled
                name="email"
                label="Email"
                placeholder="your@company.com"
                className="[&_[type=checkbox]]:text-[14px] md:[&_[type=checkbox]]:text-[14px]"
                onChange={debounce(({target}) => setInputValues({
                    ...inputValues,
                    email: target.value,
                }), 500)}
                type="email"
            />
        </Flex>
    )
}