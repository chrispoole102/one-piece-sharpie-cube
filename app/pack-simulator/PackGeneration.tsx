'use client'
import {primaryFont} from "@/app/ui/fonts";
import CardDisplayCollection from "@/app/components/CardDisplayCollection";
import generatePack from "@/app/lib/packSim";
import {useState} from "react";

export default function PackGeneration({fullCardList}) {

    const [cards, setCards] = useState([]);
    //const [initialLoad, setInitialLoading] = useState(true);
    const [loading, setLoading] = useState(true);
    async function packButtonClick() {
        setLoading(true);
        let pack = await generatePack(fullCardList);
        setCards(pack);
        setLoading(false);
    }
    return (
        <>
            <button className={`m-5 p-5 text-black text-lg transition-colors duration-250 active:bg-gray-800 cursor-pointer bg-gray-400 hover:bg-gray-500 ${primaryFont.className}`} onClick={packButtonClick}>Open New Pack</button>
            <CardDisplayCollection showCount={false} cards={cards} loading={false}></CardDisplayCollection>
        </>
    )

}