const LEADERS_AT_FIRST_X_PLACES = 4;
const COLORS = ['black', 'red', 'blue', 'purple', 'yellow', 'green']
export default async function generatePack(fullCardList: any) {

    //TODO: Make it closer to reality by having count come into effect

    let pack: any[] = [];

    console.log(fullCardList);
    console.log(COLORS);

    function randomColor() {
        let color = COLORS[Math.floor(Math.random() * COLORS.length)];
        console.log("random color: "+color);
        return color;
    }
    function randomLeader() {
        let leadersColor = randomColor();
        let leader = fullCardList[leadersColor][Math.floor(Math.random() * LEADERS_AT_FIRST_X_PLACES)];
        console.log("random leader: "+leader.name);
        return leader;
    }
    function randomCardFromColor(color: string) {
        let cardsInColor = fullCardList[color];
        let card = cardsInColor[Math.floor(Math.random() * (cardsInColor.length - 4)) + 4];
        console.log("random card: "+card.name)
        return card;
    }

    pack.push(randomLeader())
    for (let i = 0; i < COLORS.length; i++)
    {
        pack.push(randomCardFromColor(COLORS[i]))
        pack.push(randomCardFromColor(COLORS[i]))
    }
    for (let i = 0; i < 4; i++)
    {
        pack.push(randomCardFromColor(randomColor()));
    }

    return pack;
    //setCardsCallback(data);
    //setLoadingCallback(false);
}