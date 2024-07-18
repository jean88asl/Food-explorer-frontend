import { styled } from "styled-components"

export const Container = styled.div`
    width: 100%;

    main {
        max-width: 70rem;
        margin: 0 auto 116px;
    }
`

export const BackLink = styled.div`
    display: block;
    width: 70rem;
    margin: 2.5rem auto;
    
    a {
        margin: 1.5rem 0 2.625rem;
        display: flex;
        align-items: center;
        font-size: 1.8rem;
        font-weight: bold;
        font-family: 'Poppins';
        color: ${({ theme }) => theme['LIGHT-300']};
    }
`

export const FormAdd = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 32px;

    fieldset {
        border: none;
        padding: 0;

        font-size: 2rem;
        font-family: 'Poppins';
        color: ${({ theme }) => theme['LIGHT-300']}
    }

    div {
        display: flex; 
        width: 100%;
    }

    .name {
        max-width: 28.9375rem;
    }

    .ingredients {
        max-width: 52.3125rem;
    }
`

const DefaultSection = styled.section`
    width: 100%;
    height: max-content;

    display: flex;
    gap: 2rem;
`

export const SectionOne = styled(DefaultSection)`
`

export const SectionTwo = styled(DefaultSection)`
    .teste {
        width: 15.6875rem;
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
        padding: 12px 14px;
        border: 0;
        border-radius: 8px;
        background: ${({ theme }) => theme['DARK-800']};
        color: ${({ theme }) => theme['LIGHT-500']}
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