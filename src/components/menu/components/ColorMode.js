import react from "react";

export const colorModeContext = react.createContext({ mode: null, setMode: () => alert("error") });

const ColorModeProvider = (props) => {
    const [mode, setMode] = react.useState(props.initMode);
    const HandleMode = () => {
        setMode((mode === "dark")? "light": "dark");
    }

    return(<colorModeContext.Provider value={{mode: mode, toggleMode: HandleMode}}>
        {props.children}
    </colorModeContext.Provider>);
}
export default ColorModeProvider;