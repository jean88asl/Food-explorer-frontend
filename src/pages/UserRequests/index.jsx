import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"

import { OrderLine } from "./components/OrderLine"

import imageTest from "../../assets/Mask group-10.png"

import { Container, OderInformation, ContainerContent, PayInfo } from "./styles"
import { PayType } from "./components/PayType"

export function UserRequests() {
    return (
        <Container>
            <Header />

            <main>
                <ContainerContent>
                    <OderInformation>
                        <h2>Meu Pedido</h2>

                        <OrderLine
                            urlImage={imageTest}
                            quantity="5"
                            nameDish="Salada 1"
                            price="15,00"
                        />

                        <OrderLine
                            urlImage={imageTest}
                            quantity="2"
                            nameDish="Salada 1"
                            price="12,00"
                        />

                        <footer>
                            Total: R$ 103,88
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