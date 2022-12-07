import React from 'react';
import {useLang} from "../contexts/LangContext";

function ChangeLang() {
    const {lang, setLang} = useLang()

    return (
        <div>
            <hr/>
            <div>Aktif Dil: {lang}</div>
            <button onClick={() => setLang("tr")}>tr</button>
            <button onClick={() => setLang("en")}>en</button>
            <button onClick={() => setLang("de")}>de</button>
        </div>
    );
}

export default ChangeLang;