import {Sidebar} from "@/app/(protected)/admin/_components";

export default ({children}: React.PropsWithChildren) => {
    return (
        <div className="grid grid-cols-[270px_1fr] h-dvh overflow-y-clip">
            <Sidebar/>
            <main className="p-[16px] overflow-auto">
                {children}
            </main>
        </div>
    )
}