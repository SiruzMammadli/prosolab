import axios from "axios";
import {Quote} from "./_types"

export const getQuotesWithPagination = async (currentPage: number) => {
    return (await axios.get(`/api/v1/quotes?currentPage=${currentPage}&pageSize=5`, {timeout: 5000})).data;
}

export const deleteQuote = async (id: Quote["id"]) => {
    if (confirm(`Are you sure you want to delete this quote?`)) {
        return (await axios.delete(`/api/v1/quotes/${id}`, {timeout: 5000})).data;
    }
}