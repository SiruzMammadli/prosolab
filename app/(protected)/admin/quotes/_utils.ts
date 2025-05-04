import {Quote} from "./_types";

export const getBudget = (budget: Quote["budget"]) => {
    switch (budget) {
        case 0:
            return "<5k";
        case 1:
            return "5-8k";
        case 2:
            return "10k+";
        default:
            break;
    }
}