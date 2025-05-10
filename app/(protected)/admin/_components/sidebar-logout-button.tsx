'use client';
import {LogoutIcon} from "@/public/icons";
import {Button} from "@/src/components";
import {useMutation} from "@tanstack/react-query";
import {signout} from "@/app/(protected)/admin/_services";
import toast from "react-hot-toast";
import {sleep} from '@/src/utils';

export default () => {
    const mutation = useMutation({
        mutationFn: async () => {
            const res = await signout();
            if (res) {
                toast.success("Signed out");
                await sleep(1000);
                window.location.href = "/signin";
            }
            else {
                toast.error("An error occured");
            }
        }
    });

    return (
        <Button.Icon
            icon={LogoutIcon}
            className="w-[30px] h-[30px] rounded-lg [&>svg]:w-[20px]! [&>svg]:h-[20px]!"
            onClick={() => mutation.mutate()}
            disabled={mutation.isPending}
        />
    )
}