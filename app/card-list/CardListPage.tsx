

import CardDisplay from "@/app/card-list/CardDisplay";
import {useEffect, useState} from "react";
export default function CardListPage({color} : {color: string}) {

    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function doFetch() {
            setLoading(true);
            const res = await fetch('https://sheetdb.io/api/v1/e1apufzvfk104?sheet='+color)
            const data = await res.json();
            setCards(data);
            setLoading(false);
        }
        doFetch();
    }, [color])

    return (
        <div className={'p-3 grid grid-cols-2 md:grid-cols-3 gap-3'}>
            {
                loading
                    ? [...Array(9)].map((element, index) => <CardDisplay appearDelay={0} className={'relative h-auto'} key={index} card={null}></CardDisplay>)
                    : cards.map((card, index) => <CardDisplay appearDelay={index*100} className={'relative h-auto'} key={index} card={card}></CardDisplay>)
            }
        </div>
    )
}