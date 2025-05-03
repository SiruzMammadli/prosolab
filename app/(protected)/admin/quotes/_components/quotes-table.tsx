'use client';
import Table from "@/src/components/table/table";
import {Button, Flex} from "@/src/components";
import {QuotesTablePaginationButton} from "@/app/(protected)/admin/quotes/_components";
import {useState} from "react";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import {EyeIcon, TrashIcon} from "@/public/icons";

type Quote = {
    id: number;
    fullname: string;
    email: string;
    budget: number;
    description: string;
};
export default () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const {data: quotes} = useQuery({
        queryKey: ["technologies", currentPage],
        queryFn: async () => {
            return (await axios.get(`/api/v1/quotes?currentPage=${currentPage}&pageSize=6`, {timeout: 5000})).data;
        },
        refetchOnMount: false,
        refetchOnWindowFocus: false,
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
                {quotes ? (
                    <>
                        <Table.Body>
                            {quotes.items.map((quote: Quote) => (
                                <Table.Row key={quote.id}>
                                    <Table.Cell>{quote.id}</Table.Cell>
                                    <Table.Cell>{quote.fullname}</Table.Cell>
                                    <Table.Cell>{quote.email}</Table.Cell>
                                    <Table.Cell>{quote.budget}</Table.Cell>
                                    <Table.Cell>{quote.description}</Table.Cell>
                                    <Table.Cell>
                                        <Flex className="gap-[8px]">
                                            <Button.Icon
                                                icon={EyeIcon}
                                                className="rounded-lg w-[36px] h-[36px] [&>svg]:w-[20px]! [&>svg]:h-[20px]!"
                                            />
                                            <Button.Icon
                                                icon={TrashIcon}
                                                className="rounded-lg w-[36px] h-[36px] [&>svg]:w-[20px]! [&>svg]:h-[20px]! text-red-700 bg-red-50 border-red-100"
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
                                        {Array.from({length: quotes.total_count / quotes.page_size}, (_, key) => ++key)
                                            .map((val) => (
                                                <li key={val}>
                                                    <QuotesTablePaginationButton
                                                        number={`${val}`}
                                                        isCurrent={val === currentPage}
                                                        onClick={() => setCurrentPage(val)}
                                                    />
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
            {!quotes ? (
                <Skeleton count={5} className="h-[100px]"/>
            ) : null}
        </>
    )
}