'use client'

import {primaryFont} from "@/app/ui/fonts";
import { usePathname } from 'next/navigation'
import Link from "next/link";
import {getImageProps} from "next/image";
import styles from "./navBarStyle.module.css";
import {getBackgroundImage} from "@/app/lib/getBackgroundImage";
export default function NavBar() {

    const {
        props: { srcSet },
    } = getImageProps({ alt: '', width: 750, height: 1221, src: '/bg-map.jpg' })
    const backgroundImage = getBackgroundImage(srcSet)
    const style = {
        "background-blend-mode": "hard-light",
        backgroundImage
    }

    const content = [
        {
            label: "Home",
            page: "/"
        },
        {
            label: "Rules",
            page: "/rules"
        },
        {
            label: "Card List",
            page: "/card-list"
        },
        {
            label: "Pack Sim",
            page: "/pack-simulator"
        }
    ]
    const pathname = usePathname()

    return (
        <div className={`bg-sky-900 w-full md:w-70 md:basis-70 py-1 sticky top-16 z-5 ${styles.navBar}`} style={style}>
            <div className={'flex flex-row md:flex-col gap-1'}>
                {content.map((pageLinkData) =>
                    <Link key={pageLinkData.page} className={`${pathname == pageLinkData.page ? 'bg-sky-600 hover:bg-sky-500' : 'bg-sky-800 hover:bg-sky-700'} h-10 flex items-center justify-center w-full transition-colors duration-250`}  href={pageLinkData.page}>
                        <div className={`h-fit text-base ${primaryFont.className}`}>{pageLinkData.label}</div>
                    </Link>
                )}
            </div>
        </div>
    )
}