import React from "react";
import styled from "styled-components"

const StyledSearch = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid ${({ theme }) => theme.borderBase};
    background-color: ${({ theme }) => theme.backgroundBase};
    max-width: 425px;
    width: 100%;
    border-radius: 50px / 50px;
    overflow: hidden;

    input {
        width: ${({ width }) => width};
        padding: 4px 6px;
        border: none;
        outline: none;
        color: ${({ theme }) => theme.textColorBase};
        background-color: ${({ theme }) => theme.backgroundBase};
        text-overflow: ellipsis;
    }
    div{
        flex: 0;
        border: none;
        color: ${({ theme }) => theme.textColorBase};
        background-color: ${({ theme }) => theme.backgroundBase};
        box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
        border-left: 1px solid ${({ theme }) => theme.borderBase};
        width: 40px;
        height: 40px;
        @media (min-width: 200px) {
            width: 40px;
            height: 40px;
        }
        &>svg{
            margin-top: 10px;
            margin-left: 10px;
        }
    }
    button {
        cursor: pointer;
        border: none;
        flex: 1;
        color: ${({ theme }) => theme.textColorBase};
        background-color: ${({ theme }) => theme.backgroundBase};
        box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
        border-right: 1px solid ${({ theme }) => theme.borderBase};
        width: 40px;
        height: 40px;
        @media (min-width: 40px) {
            width: 20px;
            height: 40px;
        }
        &:hover, &:focus{
            opacity: 0.9;
        }
    }
`;


export default class Search extends React.Component {
    render() {
        return (<StyledSearch width={(this.props.filter === "")?"95%":"80%"}>
            <div><SearchIcon /></div>
            <input type="text" value={this.props.filter} onChange={(e) => {
                this.props.HandleFilter(e.target.value)
            }} />
            {this.props.filter !== "" && <button onClick={(e) => {this.props.HandleFilter("")}}>
                <ClearIcon />
            </button>}
        </StyledSearch>);
    }
}

class SearchIcon extends React.Component {
    render() {
        return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z" /><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" fill="currentColor" /></svg>);
    }
}

class ClearIcon extends React.Component {
    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path fill="currentColor" d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" /></svg>
        );
    }
}