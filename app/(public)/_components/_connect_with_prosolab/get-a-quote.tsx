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
    const [checkedServices, setCheckedServices] = useState<ContextValues["checkedServices"]>(contextValues.checkedServices);
    const [selectedBudget, setSelectedBudget] = useState<ContextValues["selectedBudget"]>(contextValues.selectedBudget);
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
                    toast.success("Quote sent successfully");
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

    const handleSubmit = () => {
        const validation = validateQuote(inputValues, checkedServices, projectDetails)
        if (validation.isSuccess) mutate()
    }

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
                        onClick={handleSubmit}
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

function validateQuote(
    inputValues: ContextValues["inputValues"],
    checkedServices: ContextValues["checkedServices"],
    projectDetails: ContextValues["projectDetails"]
) {
    const errors: {
        fullname?: string;
        email?: string;
        checkedServices?: string;
        selectedBudget?: string;
        projectDetails?: string;
    } = {};

    if (!inputValues.fullname || inputValues.fullname.trim() === "") errors.fullname = "Fullname cannot be empty";
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!inputValues.email || !emailRegex.test(inputValues.email)) errors.email = "Please enter a valid email address";
    if (!checkedServices.size) errors.checkedServices = "Please select at least one service";
    if (!projectDetails || projectDetails.trim() === "") errors.projectDetails = "Project details cannot be empty";
    else if (projectDetails.length > 0 && projectDetails.length < 10) errors.projectDetails = "Project details must be at least 10 characters";
    const isSuccess = Object.keys(errors).length === 0;
    if (!isSuccess) Object.values(errors).forEach((error) => { toast.error(error); });
    return { isSuccess, errors };
}