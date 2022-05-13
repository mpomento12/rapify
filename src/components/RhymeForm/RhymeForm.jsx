import { useState } from "react";
import * as rhymebrainAPI from '../../utilities/rhymebrain-api'


export default function RhymeForm({ setApiResponse }) {
    const [rhymeWord, setRhymeWord] = useState('')
     
    
    function handleChange(evt) {
        setRhymeWord(evt.target.value);
    }
    async function handleSubmit(evt) {
        evt.preventDefault();
        const apiResponse = await rhymebrainAPI.getRhyme(rhymeWord)
        // console.log(apiResponse[0].word)
        setApiResponse(apiResponse)
    }


    return (
    <div className="form-container newRhymeComp" onSubmit={handleSubmit}>
        <form>
            <input
            type="text"
            value={rhymeWord}
            placeholder="word"
            onChange={handleChange}
            />
            <button type="submit">New Words</button>
        </form>
        

    </div>
    )
}