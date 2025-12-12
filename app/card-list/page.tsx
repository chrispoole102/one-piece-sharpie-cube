import CardList from "@/app/card-list/CardList";
import {Suspense} from "react";

export default function Page() {
    return (
        <Suspense>
            <CardList></CardList>
        </Suspense>
    )
}
