'use client'

import CardDisplay from "@/app/card-list/CardDisplay";
import {useEffect, useState} from "react";
export default function CardDisplayCollection({cards, showCount}) {

    return (
        <div className={'p-3 grid grid-cols-2 md:grid-cols-3 gap-3'}>
            {
                cards.map((card, index) => <CardDisplay showCount={showCount} appearDelay={index*100} className={'relative h-auto'} key={index} card={card}></CardDisplay>)
            }
        </div>
    )
}