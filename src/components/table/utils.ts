export const generatePages = (totalPages: number, current: number) => {
    const pages: (number | string)[] = [];
    if (totalPages <= 5) for (let i = 1; i <= totalPages; i++) pages.push(i);
    else {
        if (current <= 3) pages.push(1, 2, 3, 4, 5, '...', totalPages);
        else if (current >= totalPages - 2) pages.push(1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
        else pages.push(1, '...', current - 1, current, current + 1, '...', totalPages);
    }
    return pages;
}