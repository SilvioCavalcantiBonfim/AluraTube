import React from "react";
import config from "../config.json";
import Header from "../src/components/header";
import styled from "styled-components";
import TimeLine from "../src/components/timeline";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/menu";

const StyledHomePage = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export default class HomePage extends React.Component {
    render() {
        return (<>
            <CSSReset />
            <StyledHomePage>
                <Menu/>
                <Header {...config} />
                <TimeLine {...config} />
            </StyledHomePage>
        </>);
    }
}