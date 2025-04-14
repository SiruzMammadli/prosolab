import {twMerge} from "tailwind-merge";
import {ClassValue, clsx} from "clsx";

export function cn(...inputs: ClassValue[]){
    return twMerge(clsx(inputs))
}

export function debounce<T extends (...args: any[]) => void>(
    func: T,
    delay: number
): (...args: Parameters<T>) => void {
    let timeoutId: NodeJS.Timeout;

    return (...args: Parameters<T>) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
}