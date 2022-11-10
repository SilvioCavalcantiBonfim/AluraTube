import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        margin-top: 50px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;

export default class Header extends React.Component{
    render(){
        return(<StyledHeader>
            <section className="user-info">
                <img src={`https://github.com/${this.props.github}.png`} alt=''/>
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