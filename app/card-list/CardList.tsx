'use client'

import {usePathname, useSearchParams} from "next/navigation";
import {primaryFont} from "@/app/ui/fonts";
import Link from "next/link";
import CardDisplayCollection from "@/app/components/CardDisplayCollection";
import {useEffect, useState} from "react";

export default function CardList() {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const getColor = searchParams.get("color");
    const colorParam: string = getColor ? getColor : 'black';
    const colors = {
        "black": {
            name: "Black"
        },
        "blue": {
            name: "Blue"
        },
        "red": {
            name: "Red"
        },
        "yellow": {
            name: "Yellow"
        },
        "green": {
            name: "Green"
        },
        "purple": {
            name: "Purple"
        },
    }
    function capitalizeFirstLetter(string: string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function doFetch() {
            setLoading(true);
            const res = await fetch('https://sheetdb.io/api/v1/e1apufzvfk104?sheet='+colorParam)
            const data = await res.json();
            setCards(data);
            setLoading(false);
        }
        doFetch();
    }, [colorParam])

    return (
        <div className={'basis-75/100'}>
            <div className={`flex gap-x-2 md:gap-x-4 px-2 md:px-4 items-center  h-10 decoration-2 underline underline-offset-2 ${primaryFont.className}}`}>
                {Object.keys(colors).map((colorKey) =>
                    <Link className={`text-md md:text-xl ${colorParam == colorKey ? 'text-sky-300 cursor-default' : 'hover:text-sky-200'}`} key={colorKey} href={pathname + "?color="+colorKey}>{"\u00A0"+capitalizeFirstLetter(colorKey)+"\u00A0"}</Link>
                )}
            </div>
            {
                loading
                    ? <CardDisplayCollection showCount={false} cards={[...Array(9)]}></CardDisplayCollection>
                    : <CardDisplayCollection showCount={true} cards={cards}></CardDisplayCollection>
            }
        </div>
    )
}
