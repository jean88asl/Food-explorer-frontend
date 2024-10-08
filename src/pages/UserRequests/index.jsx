import { OrderLine } from "./components/OrderLine"

import { Container, OderInformation, ContainerContent, PayInfo } from "./styles"
import { PayType } from "./components/PayType"

import { useEffect, useState } from "react"

import { useDish } from "../../contexts/DishContext"
import { Link } from "react-router-dom"

export function UserRequests() {
    const [dataDish, setDataDish] = useState([])
    const [totalOrders, setTotalOrders] = useState("")

    const { priceFormatting, removeItemContext } = useDish()

    function handleRemoveItem(id) {
        const newItemList = dataDish.filter(item => item.id !== id);
        setDataDish(newItemList);
        removeItemContext(id)
        localStorage.setItem("@foodexplorer:requests", JSON.stringify(newItemList));

        if (newItemList) {
            localStorage.removeItem("@foodexplorer:requests")
        }
    }

    useEffect(() => {
        const dataStorage = localStorage.getItem("@foodexplorer:requests");

        if (dataStorage) {
            setDataDish(JSON.parse(dataStorage));
        }
    }, [])

    const allPrices = dataDish.map(item => item.total)
    const initialValue = 0;
    const totalPartialOrders = allPrices.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue,
    )

    useEffect(() => {
        setTotalOrders(priceFormatting(totalPartialOrders))
    }, [setTotalOrders, totalPartialOrders, priceFormatting])

    return (
        <Container>
            <main>
                <ContainerContent>
                    <OderInformation>
                        <h2>Meu Pedido</h2>

                        {dataDish &&
                            dataDish.map(item => {
                                return (
                                    <OrderLine
                                        key={item.id}
                                        urlImage={item.url}
                                        quantity={item.quantity}
                                        nameDish={item.nameDish}
                                        price={priceFormatting(item.total)}
                                        onClick={() => handleRemoveItem(item.id)}
                                    />
                                )
                            })
                        }

                        {
                            <footer>
                                Total: {totalOrders}
                                <Link to="/history">
                                    Histórico
                                </Link>
                            </footer>
                        }
                    </OderInformation>

                    <PayInfo>
                        <h2>Pagamento</h2>
                        <PayType
                            dataRequest={dataDish}
                            total={totalPartialOrders}
                        />
                    </PayInfo>
                </ContainerContent>
            </main>
        </Container>
    )
}