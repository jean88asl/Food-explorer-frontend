import { useEffect, useState } from "react";
import { format } from "date-fns"

import { api } from "../../service/api";

import { useAuth } from "../../hooks/auth"
import { USER_ROLE } from "../../utils/roles"

import { Container, HistoryTable, ContainerStatus } from "./styles";

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
                                                        <select
                                                            onChange={(e) => handleStatusChange(e.target.value, data.id)}
                                                            value={data.status}
                                                        >
                                                            <option value="pendente">Pendente</option>
                                                            <option value="preparando">Preparando</option>
                                                            <option value="entregue">Entregue</option>
                                                        </select>
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
            </HistoryTable>
        </Container>
    )
}