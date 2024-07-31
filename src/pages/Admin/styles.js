import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/layoutBreakpoints";

export const Container = styled.div`
    width: 100%;

    main {
        max-width: 71rem;
        margin: 0 auto 3.3125rem;
        padding: 0 1.25rem; 
    }
`

export const SectionForm = styled.section`
    width: 100%;
    height: max-content;

    display: flex;
    gap: 2rem;

    .size-default {
        width: 15.6875rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        flex-direction: column;

        .size-default {
            width: 100%;
        }
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;


    label {
        margin-bottom: 1rem;
        font-size: 1rem;
        color: ${({ theme }) => theme['LIGHT-400']}
    }

    input {
        height: 3rem;
        padding: 12px 14px;
        border: 0;
        border-radius: 8px;
        background: ${({ theme }) => theme['DARK-800']};
        color: ${({ theme }) => theme['LIGHT-500']}
    }

    select {
        height: 3rem;
        border: 0;
        padding: 12px 14px;
        border-radius: 8px;
        background: ${({ theme }) => theme['DARK-800']};
        color: ${({ theme }) => theme['LIGHT-500']};
    }   
`

export const WrapperFile = styled.div`
    max-width: 14.3125rem;
    display: flex;
    flex-direction: column;

    p{
      color: ${({ theme }) => theme['LIGHT-400']};
      margin-bottom: 1rem;
    }

    label {
        width: 100%;
        height: 3rem;
        background: ${({ theme }) => theme['DARK-800']};

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;

        border-radius: 8px;
        color: ${({ theme }) => theme['LIGHT-100']};

        input {
            display: none;
        }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        max-width: 100%;
    }
`

export const IngredientsContainer = styled.div`
    display: flex;
    flex-direction: column;

    p {
        color: ${({ theme }) => theme['LIGHT-400']};
        margin-bottom: 16px;
    }

    div {
        max-width: 100%;
        min-height: 3rem;
        background: ${({ theme }) => theme['DARK-800']}; 
        border-radius: 8px;
        gap: 1rem;
        
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        
        padding: 4px 8px;
        overflow-y: auto;
}
`

export const TextAreaContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;

    legend {
        color: ${({ theme }) => theme['LIGHT-400']};
        margin-bottom: 1rem;
    }
`
export const ButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 2rem;

    .delete {
        background: ${({ theme }) => theme['DARK-800']};       
    }
`