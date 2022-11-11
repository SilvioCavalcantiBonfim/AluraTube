import React from "react";
import config from "../config.json";
import Header from "../src/components/header";
import styled from "styled-components";
import TimeLine from "../src/components/timeline";
import Menu from "../src/components/menu";

const StyledHomePage = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export default class HomePage extends React.Component {
    state = {
        scrollPosition: 0,
        filter: ""
    }

    componentDidMount() {
        window.addEventListener("scroll", (event) => {
            this.setState({ scrollPosition: window.scrollY })
        })
    }
    componentDidUpdate() {
        window.addEventListener("scroll", (event) => {
            this.setState({ scrollPosition: window.scrollY })
        })
    }

    HandleFilter = (a) => {
        this.setState({filter: a});
    }

    render() {
        return (<>
            <StyledHomePage>
                <Menu scrollPosition={this.state.scrollPosition} HandleFilter={this.HandleFilter} filter={this.state.filter}/>
                <Header {...config}/>
                <TimeLine {...config} filter={this.state.filter}/>
            </StyledHomePage>
        </>);
    }
}