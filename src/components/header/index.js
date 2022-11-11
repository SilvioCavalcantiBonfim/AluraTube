import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
    background-color: ${({ theme }) => theme.backgroundLevel1};
    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
        img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background-size: auto;
        }
    }
    .banner-conteiner{
        width: 100%;
        margin: 0;
        padding: 0;
        overflow-y: none;
        height: 300px;
        background-image: url(${({ bg }) => bg});
        background-size: 100%;
        background-position: 50% 50%;
        transition: background-image 1s;
    }
`;

export default class Header extends React.Component {

    state = {
        currentBanner: 0
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({ currentBanner: (this.state.currentBanner + 1) % this.props.banner.length });
        }, 10000);
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({ currentBanner: (this.state.currentBanner + 1) % this.props.banner.length });
        }, 10000);
    }


    render() {
        return (<StyledHeader bg={this.props.banner[this.state.currentBanner]}>
            <div className="banner-conteiner"/>
            <section className="user-info">
                <img src={`https://github.com/${this.props.github}.png`} alt='' />
                <div>
                    <h2>
                        {this.props.name}
                    </h2>
                    <p>
                        {this.props.job}
                    </p>
                </div>
            </section>
        </StyledHeader>);
    }
}