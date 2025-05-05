'use client';
import Table from "@/src/components/table/table";
import {Button, Flex, SomethingWentWrong} from "@/src/components";
import {QuotesTablePaginationButton} from "@/app/(protected)/admin/quotes/_components";
import {useState} from "react";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import {TrashIcon} from "@/public/icons";
import {cn} from "@/src/utils";
import {generatePages} from "@/src/components/table/utils";
import {Quote} from '../_types'
import {getBudget} from "@/app/(protected)/admin/quotes/_utils";
import {deleteQuote, getQuotesWithPagination} from "@/app/(protected)/admin/quotes/_services";
import toast from "react-hot-toast";

export default () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const {data: quotes, isError, refetch} = useQuery({
        queryKey: ["quotes", currentPage],
        queryFn: async () => await getQuotesWithPagination(currentPage),
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async (id: Quote["id"]) => {
            const res = await deleteQuote(id);
            if (res) {
                await queryClient.invalidateQueries({queryKey: ["quotes", currentPage]})
                    .then(() => {
                        toast.success('Quote deleted successfully!');
                    });
            }
        },
    });

    return (
        <>
            <Table className="mt-[24px]">
                <Table.Head>
                    <Table.Row className="bg-gray-50">
                        <Table.Header>ID</Table.Header>
                        <Table.Header>Fullname</Table.Header>
                        <Table.Header>Email</Table.Header>
                        <Table.Header>Budget</Table.Header>
                        <Table.Header>Description</Table.Header>
                        <Table.Header>Actions</Table.Header>
                    </Table.Row>
                </Table.Head>
                {quotes && !isError ? (
                    <>
                        <Table.Body>
                            {quotes.items.map((quote: Quote) => (
                                <Table.Row key={quote.id}>
                                    <Table.Cell>{quote.id}</Table.Cell>
                                    <Table.Cell>{quote.fullname}</Table.Cell>
                                    <Table.Cell>{quote.email}</Table.Cell>
                                    <Table.Cell>{getBudget(quote.budget)}</Table.Cell>
                                    <Table.Cell>{quote.description}</Table.Cell>
                                    <Table.Cell>
                                        <Flex className="gap-[8px]">
                                            <Button.Icon
                                                icon={TrashIcon}
                                                className={cn(
                                                    "rounded-lg w-[36px] h-[36px] [&>svg]:w-[20px]! [&>svg]:h-[20px]!",
                                                    "text-red-700 bg-red-50 border-red-100",
                                                    "hover:bg-red-100"
                                                )}
                                                onClick={() => mutation.mutate(quote.id)}
                                            />
                                        </Flex>
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                        <tfoot>
                        <tr>
                            <td colSpan={6} className="py-[12px] px-[16px]">
                                <Flex justifyContent="flex-end">
                                    <Flex as="ul" className="gap-x-[4px]">
                                        {generatePages(Math.ceil(quotes.total_count / quotes.page_size), quotes.current_page)
                                            .map((val, key: number) => (
                                                <li key={key}>
                                                    <QuotesTablePaginationButton
                                                        isCurrent={val === currentPage}
                                                        onClick={typeof val === 'number'
                                                            ? () => setCurrentPage(val)
                                                            : undefined}
                                                    >
                                                        {val}
                                                    </QuotesTablePaginationButton>
                                                </li>
                                            ))}
                                    </Flex>
                                </Flex>
                            </td>
                        </tr>
                        </tfoot>
                    </>
                ) : null}
            </Table>
            {!quotes && !isError ? (
                <Skeleton count={5} className="h-[100px]"/>
            ) : null}
            {isError ? (
                <SomethingWentWrong
                    onClick={async () => {
                        await refetch();
                    }}
                    className="mt-[32px]"
                />
            ) : null}
        </>
    )
}