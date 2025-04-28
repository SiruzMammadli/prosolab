import {Flex, Textarea} from "@/src/components";
import {useQuote} from "@/app/(public)/_components/_connect_with_prosolab/get-a-quote";
import {debounce} from "@/src/utils";

export default () => {
    const {setProjectDetails} = useQuote();
    return (
        <Flex
            direction="column"
            className="gap-y-[4px]"
        >
            <p>Tell us about your project</p>
            <Textarea
                placeholder="Share your project details..."
                className="text-[14px] md:text-[15px]"
                onChange={debounce(({target}) => setProjectDetails(target.value), 500)}
            />
        </Flex>
    )
}