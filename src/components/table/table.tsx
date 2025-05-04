import {cn} from "@/src/utils";
import {TableHead} from "@/src/components/table/table-head";
import {TableRow} from "@/src/components/table/table-row";
import {TableHeader} from "@/src/components/table/table-header";
import {TableBody} from "@/src/components/table/table-body";
import {TableCell} from "@/src/components/table/table-cell";
import {TablePagination} from "@/src/components/table/table-pagination";

export default function Table({children, ...props}: Readonly<React.PropsWithChildren<{
    className?: string;
}>>) {
    return (
        <section className="overflow-x-auto w-full">
            <table className={cn("w-full border-collapse", props.className)}>
                {children}
            </table>
        </section>
    )
}

Table.Head = TableHead;
Table.Row = TableRow;
Table.Header = TableHeader;
Table.Body = TableBody;
Table.Cell = TableCell;
Table.Pagination = TablePagination;