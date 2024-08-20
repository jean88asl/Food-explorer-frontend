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

        select{
            height: 3rem;
            width: 100%;
            background: ${({ theme }) => theme['DARK-900']};
            color: ${({ theme }) => theme['LIGHT-400']};
            padding-left: 1rem;
        }       
    }
`

export const ContainerStatus = styled.span`
    display: flex;
    align-items: center;
    text-transform: capitalize;
    gap: 7px;

    &::before {
        content: "";
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: ${({theme, $statusName}) => {
            if($statusName === 'pendente'){
                return theme['TOMATO-300']
            } if($statusName === 'preparado') {
                return theme['CARROT-100']
            } if($statusName === 'entregue') {
                return theme['MINT-100']
            }
        }}
    }
`