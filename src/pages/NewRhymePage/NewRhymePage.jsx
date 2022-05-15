import { useState } from 'react';
import RhymeForm from "../../components/RhymeForm/RhymeForm";
import TenWords from '../../components/TenWords/TenWords'
import TextAreaForm from '../../components/TextAreaForm/TextAreaForm'
export default function NewRhymePage () {

    const [apiResponse, setApiResponse] = useState(null)
    return(
        <div className="rhymePage">
            <RhymeForm setApiResponse={setApiResponse} apiResponse={ apiResponse } />
            <TenWords words={apiResponse} />
            <TextAreaForm />
        </div>
    )
}