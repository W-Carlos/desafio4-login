import styled from 'styled-components'

export const Container = styled.main `
    display: flex;
    font-family: 'Merriweather', serif;
    font-family: 'Lato', sans-serif;
`;

export const ContainerImage = styled.div `
    background-color: #F7FAFC;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const ContainerForm = styled.div `
    background-color: #FFFFFF;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-sizing: border-box;

    p {
        font-family: Merriweather;
        font-style: normal;
        font-size: 1rem;
        line-height: 1.25rem;
        font-weight: 400;
        margin-bottom: 0.43rem;
    }

    h1{
        font-family: Merriweather;
        font-style: normal;
        font-weight: bold;
        font-size: 1.6rem;
        line-height: 2.0rem;
        margin-bottom: 2.43rem;
    }

    label {
        display: block;
        font-family: Lato;
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.18rem;
        margin-bottom: 0.68rem;
        margin-top: 0.68rem;
    }

    input {
        
        
    }
`;

export const Input = styled.input `
    width: 21.8rem;
    height: 3.12rem;

    border: 0.06rem solid #E8E8E8;
    border-radius: 0.31rem;

    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 0.875rem;
    line-height: 1.063rem;

    padding-left: 1.25rem;

    outline: none;
    display: block;
    box-sizing: border-box;
`;

export const Links = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;

    input {
        background: #F7FAFC;
        border: 3.12rem solid #E8E8E8;
        margin-right: 0.688rem; 
        width: 0.938rem;
    }

    a {
        font-family: Lato;
        font-style: normal;
        font-weight: normal;
        font-size: 0.875rem;
        line-height: 1.063rem;

        color: #2B6CB0;
    }

`;

export const ButtonEntrar = styled.button `
    display: block;
    width: 21.6rem;
    height: 3.12rem;
    background: #04C45C;
    border-radius: 0.313rem;

    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    line-height: 1.18rem;

    color: #FFFFFF;

    border: none;
    outline: none;

    margin-top: 1rem;
    cursor: pointer;

    &:hover {
        background: #04a54f;
    }

    &:active {
        opacity: 0.7;
    }
`;

export const ButtonGoogle = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.688rem;

    width: 21.6rem;
    height: 3.12rem;
    background: #1A202C;
    border-radius: 0.313rem;

    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    line-height: 1.18rem;

    color: #FFFFFF;

    border: none;
    outline: none;

    margin-top: 0.938rem;
    margin-bottom: 2rem;
    cursor: pointer;

    &:hover {
        background: #222a3a;
    }

    &:active {
        opacity: 0.5;
    }
`;

export const LinkCadastro = styled.span `
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    line-height: 1.18rem;

    //margin-top: 1rem;

    a{
        text-decoration: none;
        color: #004FFF;
    }
    
`;

