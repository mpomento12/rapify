export default function TenWords({ words }){
    if (!words) return null
    const wordsArr = words.map(word => {
        return <li key={word.word}>{word.word}</li>
    })

    return(
        <ul className="newRhymeComp">
            {wordsArr}
        </ul>
    )
}
