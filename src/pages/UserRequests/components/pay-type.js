import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 27.8125rem;

    border-radius: 8px;
    border:1px solid ${({theme}) => theme['LIGHT-600']};
`

export const Header = styled.header`
    display: grid;
    grid-template-columns: 1fr 1fr;

    button {
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;

        padding: 1.75rem;

        background: transparent;
        color: ${({theme}) => theme['LIGHT-100']};
        border: 0;

        font-size: 1rem;
        font-family: 'Roboto';
        cursor: pointer;

        &:focus {
            background: #ffffff09;
        }

        &:first-child {
            border-bottom: 1px solid ${({theme}) => theme['LIGHT-600']};
            border-top-left-radius: 8px;
            border-right: 1px solid ${({theme}) => theme['LIGHT-600']};
        }

        &:last-child{
            border-top-right-radius: 8px;
            border-bottom: 1px solid ${({theme}) => theme['LIGHT-600']};
        }
    }

`

export const Content = styled.div`
    padding: 3.6875rem 5.6875rem 3rem;

    figure {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        
        section {
            display: flex;
            gap: 1.1rem;
        }
    }
`
export const WrapperForm = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2.25rem;

    label {
        color: ${({theme}) => theme['LIGHT-400']};
        font-size: 1rem;
        margin-bottom: 8px;
    }
    
    input{
        width: 100%;
        padding: 12px 14px;
        border-radius: 5px;
        background: transparent;
        border: 0;
        border: 1px solid ${({theme}) => theme['LIGHT-600']};
        color: ${({theme}) => theme['LIGHT-400']};

        &:focus {
            border: 1px solid ${({theme}) => theme['MINT']};
        }
    }
`