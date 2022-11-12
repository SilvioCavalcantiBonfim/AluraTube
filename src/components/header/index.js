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
    }
`;

const Header = (props) => {

    const [currentBanner, setCurrentBanner] = React.useState(0);

    React.useEffect(() => {
        setInterval(() => {
            setCurrentBanner(v => (v + 1) % props.banner.length);
        }, 10000);
    },[currentBanner]);

    return (<StyledHeader bg={props.banner[currentBanner]}>
        <div className="banner-conteiner"/>
        <section className="user-info">
            <img src={`https://github.com/${props.github}.png`} alt='' />
            <div>
                <h2>
                    {props.name}
                </h2>
                <p>
                    {props.job}
                </p>
            </div>
        </section>
    </StyledHeader>);
}

export default Header;