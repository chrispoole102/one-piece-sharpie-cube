import Image from "next/image";
import {primaryFont} from "@/app/ui/fonts";

export default function Home() {
  return (
      <div className={'p-6 basis-75/100'}>
        <h1 className={`text-2xl font-bold ${primaryFont.className}`}>Welcome to the One Piece Sharpie Cube!</h1>
          <p className={`text-lg mb-5 ${primaryFont.className}`}>Here's a taste of what to expect:</p>
        <Image src={'/leader-showcase.jpg'} alt={'leader showcase'} width={1000} height={462}></Image>
        <Image src={'/card-showcase.jpg'} alt={'card showcase'} width={1000} height={464}></Image>
      </div>
  );
}
