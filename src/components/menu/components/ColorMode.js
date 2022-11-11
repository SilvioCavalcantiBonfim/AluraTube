import react from "react";

export const colorModeContext = react.createContext({ mode: null, setMode: () => alert("error") });

export default class ColorModeProvider extends react.Component {
    state = {
        mode: this.props.initMode
    }

    HandleMode = () => {
        this.setState({mode: (this.state.mode === "dark")? "light": "dark"});
    }

    render() {
        return (<colorModeContext.Provider value={{mode: this.state.mode, toggleMode: this.HandleMode}}>
            {this.props.children}
        </colorModeContext.Provider>
        );
    }
}