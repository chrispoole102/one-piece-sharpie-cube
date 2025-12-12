import Image from "next/image";

export default function Header() {
    return (
        <div className={'bg-cyan-700 h-16 basis-16 p-2 sticky top-0 z-10'}>
            <div className={'h-full flex justify-center md:justify-start'}>
                <Image className={'w-auto'} src={'/card-game-logo2.png'} alt={''} width={504} height={130}></Image>
            </div>
        </div>
    )
}