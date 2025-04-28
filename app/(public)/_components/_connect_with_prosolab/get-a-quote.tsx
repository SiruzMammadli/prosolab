'use client';
import {Button, Flex} from "@/src/components";
import {createContext, useContext, useState} from "react";
import {
    QuoteBudgets,
    QuoteServices,
    QuoteLabeledTextInputs, QuoteProjectDetails
} from "@/app/(public)/_components/_connect_with_prosolab";
import axios, {AxiosError} from "axios";
import {useMutation} from "@tanstack/react-query";
import {StatusCode} from "@/src/utils/enums";
import toast from "react-hot-toast";
import {sleep} from '@/src/utils';

const contextValues: ContextValues = {
    selectedBudget: 0,
    inputValues: {email: '', fullname: ''},
    projectDetails: "",
    checkedServices: new Map(),
    setSelectedBudget: () => {
    },
    setInputValues: () => {
    },
    setProjectDetails: () => {
    },
    setCheckedServices: () => {
    }
}

const GetAQuoteContext = createContext<ContextValues>(contextValues);
export const useQuote = () => {
    const context = useContext(GetAQuoteContext);
    if (context === undefined) throw new Error('useGetAQuote must be used within GetAQuoteContext');
    return context;
}

export default () => {
    const [inputValues, setInputValues] = useState<ContextValues["inputValues"]>(contextValues.inputValues);
    const [selectedBudget, setSelectedBudget] = useState<ContextValues["selectedBudget"]>(contextValues.selectedBudget);
    const [checkedServices, setCheckedServices] = useState<ContextValues["checkedServices"]>(contextValues.checkedServices);
    const [projectDetails, setProjectDetails] = useState<ContextValues["projectDetails"]>(contextValues.projectDetails);

    const {mutate, isPending} = useMutation({
        mutationFn: async () => {
            try {
                const res = await axios.post("/api/v1/quotes", {
                    fullname: inputValues.fullname,
                    email: inputValues.email,
                    budget: selectedBudget,
                    services: checkedServices.keys().toArray().map(tag => ({tag})),
                    description: projectDetails,
                });
                if (res.status === StatusCode.Created) {
                    toast.success(res.data);
                    await sleep(1000);
                    window.location.reload();
                }
            } catch (e) {
                if (e instanceof AxiosError) {
                    toast.error(e.response!.data);
                }
            }
        }
    });

    return (
        <GetAQuoteContext value={{
            selectedBudget,
            inputValues,
            projectDetails,
            checkedServices,
            setSelectedBudget,
            setInputValues,
            setProjectDetails,
            setCheckedServices,
        }}>
            <div>
                <Flex
                    direction="column"
                    className="gap-y-[32px]"
                >
                    <QuoteLabeledTextInputs/>
                    <QuoteServices/>
                    <QuoteBudgets/>
                    <QuoteProjectDetails/>
                    <Button
                        variant="primary"
                        onClick={() => mutate()}
                        disabled={isPending}
                        spinnercontent="Processing..."
                    >
                        Submit a Request
                    </Button>
                </Flex>
            </div>
        </GetAQuoteContext>
    )
}

type ContextValues = {
    selectedBudget: number;
    inputValues: { email: string, fullname: string; };
    projectDetails: string;
    checkedServices: Map<string, boolean>;
    setProjectDetails: React.Dispatch<React.SetStateAction<string>>;
    setSelectedBudget: React.Dispatch<React.SetStateAction<number>>;
    setInputValues: React.Dispatch<React.SetStateAction<{ email: string, fullname: string; }>>;
    setCheckedServices: React.Dispatch<React.SetStateAction<Map<string, boolean>>>;
}
