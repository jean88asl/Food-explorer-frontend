import { useEffect, useState } from "react";
import { Container, HistoryTable } from "./styles";
import { api } from "../../service/api";
import { format } from "date-fns"

export function RequestHistory() {
    const [historyData, setHistoryData] = useState([])

    useEffect(() => {
        async function fetchDataHistory() {
            const response = await api.get("requests")
            console.log(response.data[0].items)
            setHistoryData(response.data)
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
                                        <td>&#8226; Pendente</td>
                                        <td>{data.id}</td>
                                        <td>
                                            {
                                                data.items.map(item => {
                                                    return (
                                                        <span key={item.id}>
                                                            {`${item.quantity} x ${item.dish_name} `}
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