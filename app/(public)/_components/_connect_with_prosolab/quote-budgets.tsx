'use client';
import {Button, Flex} from "@/src/components";
import {cn} from "@/src/utils";
import {useQuote} from "@/app/(public)/_components/_connect_with_prosolab/get-a-quote";

export default () => {
    const {selectedBudget, setSelectedBudget} = useQuote();
    return (
        <Flex
            direction="column"
            className="gap-y-[4px]"
        >
            <p>Your Budget</p>
            <div className="grid xs:grid-cols-3 gap-[4px]">
                <Button
                    variant="outlined"
                    className={cn(
                        "h-[45px] border-gray-100",
                        selectedBudget === 0 && 'border-gray-200 text-black'
                    )}
                    onClick={() => setSelectedBudget(0)}
                >
                    $1k-5k
                </Button>
                <Button
                    variant="outlined"
                    className={cn(
                        "h-[45px] border-gray-100",
                        selectedBudget === 1 && 'border-gray-200 text-black'
                    )}
                    onClick={() => setSelectedBudget(1)}
                >
                    $5k-8k
                </Button>
                <Button
                    variant="outlined"
                    className={cn(
                        "h-[45px] border-gray-100",
                        selectedBudget === 2 && 'border-gray-200 text-black'
                    )}
                    onClick={() => setSelectedBudget(2)}
                >
                    $10k+
                </Button>
            </div>
        </Flex>
    )
}