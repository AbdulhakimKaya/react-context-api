import {ThemeContextProvider} from "./contexts/ThemeContext";
import {LangContextProvider} from "./contexts/LangContext";
import './App.css'
import Container from "./Container";
import React from "react";

const App = () =>
    (
        <>
            {/* Altta yorum satırında olan kod için yorum yapıldı
            ThemeContext ile bir veri sağlayabilmek için Provider kullanıldı
            Bu Provider'ın altında çağırılan herhangi bir component üzerinden bu context deki veriye erişebiliriz
            value prop'unda sağlanılan veriye herhangi bir component'den erişebiliriz
            */}
            {/*<ThemeContext.Provider value={"light"}>*/}
            {/*    <ChangeTheme/>*/}
            {/*</ThemeContext.Provider>*/}

            <LangContextProvider>
                <ThemeContextProvider>
                    <Container/>
                </ThemeContextProvider>
            </LangContextProvider>
        </>
    );


export default App;
