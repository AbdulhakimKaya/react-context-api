import {createContext, useContext, useState} from "react";

const LangContext = createContext();

export const LangContextProvider = ({children}) => {
    const [lang, setLang] = useState("tr")

    const values = {
        lang,
        setLang
    }
    return (
        <LangContext.Provider value={values}>
            {children}
        </LangContext.Provider>
    )
}

export const useLang = () => {
    const context = useContext(LangContext)

    if (context === undefined) {
        throw new Error("useLang must be used within a LangProvider")
    }

    return context
}