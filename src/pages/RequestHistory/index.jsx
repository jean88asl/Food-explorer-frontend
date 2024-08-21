import { useEffect, useState } from "react";
import { format } from "date-fns"

import { api } from "../../service/api";
import { MdKeyboardArrowDown } from "react-icons/md";


import { useAuth } from "../../hooks/auth"
import { USER_ROLE } from "../../utils/roles"

import { Container, HistoryTable, ContainerStatus, SizeContainerMobile, SelectContainer } from "./styles";

export function RequestHistory() {
    const [historyData, setHistoryData] = useState([])

    const { user } = useAuth()

    async function handleStatusChange(newStatus, id) {
        setHistoryData(prevHistoryData =>
            prevHistoryData.map(data =>
                data.id === id ? { ...data, status: newStatus } : data
            )
        )

        const newDataStatus = {
            id,
            newStatus
        }

        try {
            await api.put(`/requests/`, newDataStatus)
            alert("Atualização de status efetuada.")
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        async function fetchDataHistory() {
            const response = await api.get("requests")
            setHistoryData(response.data)
            console.log(response.data)
        }

        fetchDataHistory()
    }, [])

    return (
        <Container>
            <h1>Histórico de pedidos</h1>

            <HistoryTable>
                <table>
                    <thead>
                        <tr>
                            <th>Status</th>
                            <th>Código</th>
                            <th className="different-size">Detalhamento</th>
                            <th>Data e hora</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            historyData &&
                            historyData.map(data => {
                                return (
                                    <tr key={data.id}>
                                        <td>
                                            {
                                                [USER_ROLE.ADMIN].includes(user.role) ?
                                                    (
                                                        <SelectContainer>
                                                            <select
                                                                onChange={(e) => handleStatusChange(e.target.value, data.id)}
                                                                value={data.status}
                                                            >
                                                                <option value="pendente">Pendente</option>
                                                                <option value="preparando">Preparando</option>
                                                                <option value="entregue">Entregue</option>
                                                            </select>
                                                            <MdKeyboardArrowDown size={24} />
                                                        </SelectContainer>
                                                    ) : (
                                                        <ContainerStatus
                                                            $statusName={data.status}
                                                        >
                                                            {data.status}
                                                        </ContainerStatus>
                                                    )
                                            }
                                        </td>
                                        <td>{String(data.id).padStart(8, "0")}</td>
                                        <td>
                                            {
                                                data.items.map(item => {
                                                    return (
                                                        <span key={item.id}>
                                                            {`${item.quantity}x ${item.dish_name} `}
                                                        </span>
                                                    )
                                                })
                                            }
                                        </td>
                                        <td>{format(data.updated_at, "dd/MM 'às' HH'h'mm")}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

                <SizeContainerMobile>
                    <h2>Pedidos</h2>
                    {
                        historyData.map(data => {
                            return (
                                <div key={data.id}>
                                    <header>
                                        <span>{String(data.id).padStart(6, "0")}</span>
                                        <span>
                                            {[USER_ROLE.ADMIN].includes(user.role) ? (
                                                <>

                                                </>
                                            ) : (
                                                <ContainerStatus
                                                    $statusName={data.status}
                                                >
                                                    {data.status}
                                                </ContainerStatus>
                                            )}
                                        </span>
                                        <span>{format(data.updated_at, "dd/MM 'às' HH'h'mm")}</span>
                                    </header>
                                    <main>
                                        {
                                            data.items.map(item => {
                                                return (
                                                    <span key={item.id}>
                                                        {`${item.quantity}x ${item.dish_name} `}
                                                    </span>
                                                )
                                            })
                                        }

                                        {
                                            [USER_ROLE.ADMIN].includes(user.role) &&
                                            <SelectContainer>
                                                <select
                                                    onChange={(e) => handleStatusChange(e.target.value, data.id)}
                                                    value={data.status}
                                                >
                                                    <option value="pendente">Pendente</option>
                                                    <option value="preparando">Preparando</option>
                                                    <option value="entregue">Entregue</option>
                                                </select>
                                                <MdKeyboardArrowDown size={24} />
                                            </SelectContainer>
                                        }
                                    </main>
                                </div>
                            )
                        })
                    }
                </SizeContainerMobile>
            </HistoryTable>
        </Container>
    )
}