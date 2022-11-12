import styled from "styled-components";

export const StyledRegisterVideo = styled.div`
    .add-video {
        width: 50px;
        height: 50px;
        font-size: 20px;
        color: white;
        position: fixed;
        bottom: 16px;
        right: 16px;
        border: 0;
        background-color: red;
        border-radius: 50%;
        z-index: 99;
        cursor: pointer;
        &:hover{
            opacity: 1;
            box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3), 0px 4px 8px rgba(0, 0, 0, 0.15);
        }
        svg{
            margin-top: 2px;
        }
        &:hover>svg{
            animation: rotate 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
        }
        @keyframes rotate {
            0% {transform: rotate(0deg)}
            100% {transform: rotate(180deg)}
        }
    }
    .close-modal {
        width: 25px;
        height: 25px;
        position: absolute;
        top: 8px;
        right: 16px;
        color: white;
        background-color: transparent;
        border: none;
        z-index: 10000;
        cursor: pointer;
    }
    button[type="submit"] {
        background-color: red;
        padding: 8px 16px;
        border: none;
        border-radius: 2px;
        cursor: pointer;
        color: white;
        &:hover{
            opacity: 0.9;
        }
    }
    form {
        width: 100%;
        padding: 5%;
        background-color: rgba(0,0,0,0.5);
        position: fixed;
        top: 0; bottom: 0;
        left: 0; right: 0;
        z-index: 100;
        display: flex;
        justify-content: center;
        & > div {
            flex: 1;
            position: relative;
            border-radius: 8px;
            max-width: 320px;
            background-color: ${({ theme }) => theme.backgroundLevel2};
            display: flex;
            flex-direction: column;
            position: relative;
            padding: 16px;
            padding-top: 198px;
            height: min-content;
            box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3), 0px 4px 8px rgba(0, 0, 0, 0.15);
        }
    }
    input {
        border-radius: 2px;
        border: 1px solid ${({ theme }) => theme.borderBase};
        padding: 8px 10px;
        margin-bottom: 10px;
        outline: none;
        color: #222222;
        background-color: #f9f9f9;
        color: ${({ theme }) => theme.textColorBase};
        background-color: ${({ theme }) => theme.backgroundBase};
        text-overflow: ellipsis;
    }
    .mini-thumb-conteiner{
        margin-bottom: 10px;
        border-radius: 8px;
        position: absolute;
        top: 0;
        left: 0;
        height: 0;
        width: 100%;
    }
    .mini-thumb{
        width: 100%;
        aspect-ratio: 16 / 9;
        border-radius: 8px 8px 0px 0px;
    }
    .mini-thumb-error{
        filter: blur(3px);
    }
`;