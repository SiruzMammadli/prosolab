import {QuotesTable} from "@/app/(protected)/admin/quotes/_components";
import {Button, Flex} from "@/src/components";

export default () => {
    return (
        <Flex direction="column">
            <Flex justifyContent="space-between" alignItems="center">
                <h1 className="text-2xl font-semibold">Quotes</h1>
                <Button variant="primary" className="h-[35px] px-[16px]">
                    Add New Quote
                </Button>
            </Flex>
            <QuotesTable />
        </Flex>
    )
}