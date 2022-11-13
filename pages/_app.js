import React from "react";
import { ThemeProvider } from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import ColorModeProvider, { colorModeContext } from "../src/components/menu/components/ColorMode";
import RegisterVideo from "../src/components/RegisterVideo";

const theme = {
    light: {
        backgroundBase: "#f9f9f9",
        backgroundLevel1: "#ffffff",
        backgroundLevel2: "#f0f0f0",
        borderBase: "#e5e5e5",
        textColorBase: "#222222",
    },
    dark: {
        backgroundBase: "#181818",
        backgroundLevel1: "#202020",
        backgroundLevel2: "#313131",
        borderBase: "#383838",
        textColorBase: "#FFFFFF",
    }
};

function Root({ Component, pageProps }) {
    const ColorContext = React.useContext(colorModeContext);
    React.useEffect(() => {
        document.title = "AluraTube";
    }, []);
    return (
        <ThemeProvider theme={theme[ColorContext.mode]}>
            <CSSReset />
            <Component {...pageProps} />
            <RegisterVideo />
        </ThemeProvider>
    );
}



export default function _app(props) {
    return (<ColorModeProvider initMode={"dark"}>
            <Root {...props} />
        </ColorModeProvider>);
}