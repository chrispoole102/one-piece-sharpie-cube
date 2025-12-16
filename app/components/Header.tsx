import Image, {getImageProps} from "next/image";
import {getBackgroundImage} from "@/app/lib/getBackgroundImage";

export default function Header() {
    const {
        props: { srcSet },
    } = getImageProps({ alt: '', width: 570, height: 60, src: '/waves6.jpg' })
    const backgroundImage = getBackgroundImage(srcSet)
    const style = {
        "background-blend-mode": "hard-light",
        "background-repeat": "repeat-x",
        "background-size": "auto 100%",
        backgroundImage
    }

    return (
        <div className={'bg-sky-600 h-16 basis-16 sticky top-0 z-10'} style={style}>
            <div className={'h-full flex justify-center md:justify-start'}>
                <div className={'h-full p-2 bg-sky-700'}>
                    <Image className={'w-auto h-full'} src={'/card-game-logo2.png'} alt={''} width={504} height={130}></Image>
                </div>
            </div>
        </div>
    )
}