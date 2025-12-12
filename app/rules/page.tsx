
import {primaryFont} from "@/app/ui/fonts";
export default function RulesPage() {
    return (
        <div className={`basis-75/100 ${primaryFont.className} p-4`}>
            <h1 className={'text-lg font-bold pb-1'}>Overview</h1>
            <p>Welcome to One Piece Sharpie Cube! A cube is a custom draft format and a sharpie cube involves physically altered cards. The golden rule is <b>follow the text written on the card!</b></p>
            <h1 className={'text-lg font-bold pt-3 pb-1'}>Drafting</h1>
            <ul className={'list-disc px-6'}>
                <li>Each player opens 3 packs with 17 cards each.</li>
                <li>Pick 1 card from your first pack and pass the rest to the left. Continue until all cards have been picked.</li>
                <li>Each pack contains a minimum of 2 cards of each color and 1 leader</li>
            </ul>
            <h1 className={'text-lg font-bold pt-3 pb-1'}>Deck Building</h1>
            <ul className={'list-disc px-6'}>
                <li>Pick your leader. Each leader has been made mono-color, but you can select any secondary color you want.</li>
                <li>Excluding your leader, you deck contains 40 cards with colors matching your leader.</li>
                <li>You may add any number of "Cannon Fodder" cards to your deck from outside the draft.</li>
            </ul>

            <h1 className={'text-lg font-bold pt-3 pb-1'}>Archetypes</h1>
            <p>While drafting and deck building, you may want to consider the following archetypes that the draft is focused around.</p>
            <p>🟢🔴 - Straw Hats / Buffing Power</p>
            <p>🔴⚫ - Navy / Debuffing Power</p>
            <p>⚫🔵 - Trash</p>
            <p>🔵🟣 - Events</p>
            <p>🟣🟡 - Triggers / Life Manipulation</p>
            <p>🟡🟢 - Reusing On Play effects</p>
        </div>
    )
}