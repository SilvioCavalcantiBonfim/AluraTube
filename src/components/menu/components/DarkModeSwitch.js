import React from "react";
import styled from "styled-components";
import { colorModeContext } from "./ColorMode";
// import { ColorModeContext } from "./ColorMode";

const StyledSwitchToggle = styled.div`
    .themebox button {
        border: none;
        background-color: transparent;
        cursor: pointer;
        width: 70px;
        height: 70px;
        &:hover, &:focus{
            opacity: 1 !important;
            outline: none;
            border: none;
        }
    }

    .themebox {
        --transition-duration: 400ms;
        width: 50px;
        height: 50px;
        transform: scale(0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        /* transition: color, background-color var(--transition-duration); */
    }

    .themebox svg {
        /* transition: stroke var(--transition-duration); */
        stroke: ${({ theme, scrollMode }) =>{
            return (scrollMode)?theme.textColorBase: "#FFFFFF";
        }};
        stroke-width: 1;
        &:hover{
            stroke-width: 2;
        }
    }

    .themebox .moon-icon {
        stroke-dasharray: 0px 1px;
        opacity: 0;
        transition: stroke-dasharray 0.5s ease-in, opacity 300ms ease-in;
    }

    .themebox .sun-icon {
        stroke-dasharray: 1px 1px;
        opacity: 1;
        transition: stroke-dasharray 0.5s ease-in, opacity 300ms ease-in;
    }

    .themebox.dark .moon-icon {
        stroke-dasharray: 1px 1px;
        opacity: 1;
    }

    .themebox.dark .sun-icon {
        stroke-dasharray: 0px 1px;
        opacity: 0;
    }
`;

export default function DarkModeSwitch(props) {
    const Context = React.useContext(colorModeContext);

    return (
        <StyledSwitchToggle scrollMode={props.mode}>
            <div className={(Context.mode === "dark") ? "themebox" : "dark themebox"}>
        <button title={(Context.mode === "dark") ? "Tema Claro" : "Tema Escuro"} onClick={Context.toggleMode} style={{color: (Context.mode === "dark") ? "white" : "black"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none">
                <path pathLength="1" className="moon-icon" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                <circle pathLength="1" className="sun-icon" cx="12" cy="12" r="5"></circle>
                <line pathLength="1" className="sun-icon" x1="12" y1="1" x2="12" y2="3"></line>
                <line pathLength="1" className="sun-icon" x1="12" y1="21" x2="12" y2="23"></line>
                <line pathLength="1" className="sun-icon" x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line pathLength="1" className="sun-icon" x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line pathLength="1" className="sun-icon" x1="1" y1="12" x2="3" y2="12"></line>
                <line pathLength="1" className="sun-icon" x1="21" y1="12" x2="23" y2="12"></line>
                <line pathLength="1" className="sun-icon" x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line pathLength="1" className="sun-icon" x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
        </button>
    </div >
        </StyledSwitchToggle >
    )
}