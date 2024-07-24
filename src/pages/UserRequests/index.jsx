import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"

import { OrderLine } from "./components/OrderLine"

import { Container, OderInformation, ContainerContent, PayInfo } from "./styles"
import { PayType } from "./components/PayType"

import { useEffect, useState } from "react"

import { useDish } from "../../contexts/DishContext"

export function UserRequests() {
    const [dataDish, setDataDish] = useState([])

    const { priceFormatting } = useDish()

    function handleRemoveItem(id) {
        const newItemList = dataDish.filter(item => item.id !== id);
        setDataDish(newItemList);

        
        localStorage.setItem("@foodexplorer:requests", JSON.stringify(newItemList));

        if(newItemList) {
            localStorage.removeItem("@foodexplorer:requests")
        }
    }

    useEffect(() => {
        const dataStorage = localStorage.getItem("@foodexplorer:requests");

        if (dataStorage) {
            setDataDish(JSON.parse(dataStorage));
        }
    }, []);
    return (
        <Container>
            <Header />

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

                        <footer>
                            {/* {items.total} */}
                        </footer>
                    </OderInformation>

                    <PayInfo>
                        <h2>Pagamento</h2>
                        <PayType />
                    </PayInfo>
                </ContainerContent>
            </main>

            <Footer />
        </Container>
    )
}