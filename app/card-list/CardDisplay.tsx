'use client'

import {useEffect, useState} from "react";
import NextImage from "next/image";
import styles from "@/app/card-list/cardDisplay.module.css";
import {primaryFont} from "@/app/ui/fonts";
export default function CardDisplay({card, appearDelay, showCount, ...rest}: any) {

    if (card == null)
        card = {src: '', name: '', count: '', changes: ''}

    const [loaded, setLoaded] = useState(false);
    let timeout: NodeJS.Timeout;

    useEffect(() => {
        setLoaded(false);
        if (card.src == '')
            return;
        if (timeout)
            clearTimeout(timeout);
        let img = new Image();
        img.onload = () => {
            timeout = setTimeout(() => setLoaded(true), appearDelay)
        }
        img.src = card.src;
    }, [card.src]);

    return (
        <div {...rest}>
            <NextImage className={`w-full h-auto ${loaded && styles.placeholderTransition}`} src={'/card-back.png'} alt={''} height={600} width={429}></NextImage>
            {card.src != '' && <img className={`fade-in w-full h-auto ${styles.placeholderAbsolute} ${!loaded && 'hidden'} ${styles.cardDisplayTransition}`} src={card.src} alt={'y'} width={600} height={838}></img>}
            {card.name != '' && <h3 className={`fade-in font-bold text-lg ${primaryFont.className}`}>{card.name}</h3>}
            {card.changes != '' && <p className={`fade-in ${primaryFont.className}`}>{card.changes}</p>}
            {card.count != '' && showCount && <p className={`fade-in font-bold top-10 left-2 absolute ${primaryFont.className} ${styles.countText}`}>{'x'+card.count}</p>}
        </div>
    )
}