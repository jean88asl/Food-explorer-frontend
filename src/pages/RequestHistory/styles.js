import styled from "styled-components";

export const Container = styled.div`
    margin: 0 auto;
    padding-top: 2rem;

    h1 {
        font-family: 'Poppins';
        font-size: 2rem;
        font-weight: normal;
        padding-bottom: 2rem;
    }
`

export const HistoryTable = styled.div`
    flex: 1;
    overflow: auto;

    table {
        width: 100%;
        border-collapse: collapse;
        text-align: left;
        margin: 0;

        th, td {
            font-family: 'Roboto';
            color: ${({ theme }) => theme['LIGHT-300']};
            border: 2px solid ${({ theme }) => theme['DARK-1000']};
            font-size: 0.875rem;
            width: auto;
        }
        
        th {
            padding: 2rem;
            font-weight: bold;
                        
            &:first-child {
                border: 2px solid ${({ theme }) => theme['DARK-1000']};
                border-top-left-radius: 10px
            }

            &:last-child {
                border-top-right-radius: 8px;
            }
        }

        td {
            padding: 1rem 2rem;
        }

        .different-size{
            max-width: 45rem;
        }
    }
`