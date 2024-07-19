import { useState } from "react";

import { Container, Header, Content, WrapperForm } from "./pay-type";

import { Button } from "../../../components/Button"

import logoPix from "../../../assets/pix.svg"
import logoCredit from "../../../assets/credit.svg"
import qrCode from "../../../assets/qrpix.png"

export function PayType() {
    const [type, setType] = useState(1)


    function handlePixPay() {
        setType(1)
    }

    function handleCreditPay() {
        setType(2)
    }

    return (
        <Container>
            <Header>
                <button type="button" onClick={handlePixPay}>
                    <img src={logoPix} alt="" />
                    PIX
                </button>
                <button type="button" onClick={handleCreditPay}>
                    <img src={logoCredit} alt="" />
                    Crédito
                </button>
            </Header>

            <Content>
                {type === 1 ? (
                    <figure>
                        <img src={qrCode} alt="" />
                    </figure>
                ) : (
                    <div>
                        <form>
                            <WrapperForm>
                                <label htmlFor="card-number">Número do cartão</label>
                                <input type="text" id="card-number" placeholder="0000 0000 0000 0000" maxLength="16"/>
                            </WrapperForm>
            
                            <section>
                                <WrapperForm>
                                    <label htmlFor="validation">Validade</label>
                                    <input type="text" id="validation" placeholder="04/25"/>
                                </WrapperForm>

                                <WrapperForm>
                                    <label htmlFor="cvc">Número do cartão</label>
                                    <input type="text" id="cvc" placeholder="000" maxLength="3"/>
                                </WrapperForm>
                            </section>

                            <Button 
                                title="Finalizar pagamento"
                                type="button"
                            />
                        </form>
                    </div>
                )
                }
            </Content>
        </Container>
    )
}