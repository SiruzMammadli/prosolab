import {QuotesTable} from "@/app/(protected)/admin/quotes/_components";
import {Flex} from "@/src/components";

export default () => {
    return (
        <Flex direction="column">
            <Flex justifyContent="space-between" alignItems="center">
                <h1 className="text-2xl font-semibold">Quotes</h1>
            </Flex>
            <QuotesTable />
        </Flex>
    )
}