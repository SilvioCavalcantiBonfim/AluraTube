import React from "react";
import styled from "styled-components";

const StyledTimeline = styled.div`
    flex: 1;
    width: 100%;
    padding: 16px;
    overflow: hidden;
    h2 {
        font-size: 16px;
        margin-bottom: 16px;
        text-transform: capitalize;
    }
    img {
        aspect-ratio: 16/9;
        font-weight: 500;
        object-fit: cover;
        width: 100%;
        max-width: 210px;
        height: auto;
    }
    section {
        width: 100%;
        padding: 0;
        overflow: hidden;
        padding: 16px;
        div {
            width: calc(100vw - 16px * 4);
            display: grid;
            grid-gap: 16px;
            grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
            grid-auto-flow: column;
            grid-auto-columns: minmax(200px,1fr);
            overflow-x: scroll;
            scroll-snap-type: x mandatory;
            a {
                scroll-snap-align: start;
                    span {
                        padding-top: 8px;
                        display: block;
                        padding-right: 24px;
                        color: ${({ theme }) => theme.textColorBase || "#222222"};
                    }
                }
            }
    }
`;

const TimeLine = (props) => {
    return (<>
        <StyledTimeline>
        {Object.keys(props.playlists).map((e, i) => {
                const filtred = props.playlists[e].filter((ee) => {
                    return ee.title.toLowerCase().includes(props.filter.toLowerCase());
                });
                return (filtred.length > 0 && <section key={i}>
                    <h2>{e}</h2>
                    <div>
                        {filtred.map((v, j) => {
                            return (<a href={v.url} key={j}>
                                <img src={v.thumb} />
                                <span>{v.title}</span>
                            </a>);
                        })}
                    </div>
                </section>);
            })}
        </StyledTimeline>
    </>);
}
export default TimeLine;