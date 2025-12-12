import {primaryFont} from "@/app/ui/fonts";
import PackGeneration from "@/app/pack-simulator/PackGeneration";
import {ReactNode, Suspense} from "react";
import ServerDataFetching from "@/app/pack-simulator/ServerDataFetching";
export default function PackSimulatorPage() {

    const sheets = ['black', 'red', 'blue', 'green', 'purple', 'yellow'];

    return (
        <div className={'basis-75/100'}>
            <Suspense fallback={<Loading/> as ReactNode}>
                <ServerDataFetching></ServerDataFetching>
            </Suspense>
        </div>
    )
}
function Loading() {
    return (
        <div className={`p-5 text-lg font-bold ${primaryFont.className}`}>Loading...</div>
    )
}