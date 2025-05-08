import {Quote} from "./_types"
import {StatusCode} from "@/src/utils/enums";
import http from '@/src/utils/axios';

export const getQuotesWithPagination = async (currentPage: number) => {
    return (await http.get("/quotes?currentPage=" + currentPage + "&pageSize=5")).data;
}

export const deleteQuote = async (id: Quote["id"]) => {
    if (confirm(`Are you sure you want to delete this quote?`)) {
        const res = await http.delete("/quotes/" + id);
        return res.status === StatusCode.NoContent;
    }
}