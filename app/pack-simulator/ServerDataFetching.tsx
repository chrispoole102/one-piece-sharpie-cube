import PackGeneration from "@/app/pack-simulator/PackGeneration";

export default async function ServerDataFetching() {

    const sheets = ['black', 'red', 'blue', 'green', 'purple', 'yellow'];
    interface Map {
        [key: string]: string | undefined
    }
    let fullCardListObject: Map = {}
    for (let i = 0; i < sheets.length; i++)
    {
        const res = await fetch('https://sheetdb.io/api/v1/e1apufzvfk104?sheet='+sheets[i])
        const data = await res.json();
        fullCardListObject[sheets[i]] = data;
    }
    return (
        <PackGeneration fullCardList={fullCardListObject}></PackGeneration>
    )
}