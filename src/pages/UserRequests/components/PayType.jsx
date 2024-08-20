import { useState } from "react"
import { Container, Header, Content, WrapperForm } from "./pay-type"
import InputMask from "react-input-mask"

import { Button } from "../../../components/Button"

import logoPix from "../../../assets/pix.svg"
import logoCredit from "../../../assets/credit.svg"
import qrCode from "../../../assets/qrpix.png"

export function PayType() {
    const [type, setType] = useState(1)
    const [cardNumber, setCardNumber] = useState(Number)
    const [cardExpiration, setCardExpiration] = useState(Date)
    const [cvc, setCvc] = useState(Number)

    function handlePixPay() {
        setType(1)
    }

    function handleCreditPay() {
        setType(2)
    }

    function handleCheckout() {
        if (!cardNumber || !cardExpiration || !cvc) {
            return alert("Favor preencha todos os campos.")
        }

        const cardNumberFormate = cardNumber.replace(/( )+/g, '')
        const cvcFormate = cvc.replace(/( )+/g, '')

        if (Number(cardNumberFormate) === 7777777777777777 && Number(cvcFormate) === 777) {
            return alert("Deu bom papai!")
        } else[
            alert("Dados inválidos")
        ]
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
                                <InputMask
                                    id="card-number"
                                    mask="9999 9999 9999 9999"
                                    maskPlaceholder="0000 0000 0000 0000"
                                    onChange={e => setCardNumber(e.target.value)}
                                />
                            </WrapperForm>

                            <section>
                                <WrapperForm>
                                    <label htmlFor="validation">Validade</label>
                                    <InputMask
                                        id="validation"
                                        maskPlaceholder="04/24"
                                        mask="99/99"
                                        onChange={e => setCardExpiration(e.target.value)} />
                                </WrapperForm>

                                <WrapperForm>
                                    <label htmlFor="cvc">CVC</label>
                                    <InputMask 
                                        id="cvc" 
                                        maskPlaceholder="000"
                                        mask="999" 
                                        onChange={e => setCvc(e.target.value)} />
                                </WrapperForm>
                            </section>

                            <Button
                                title="Finalizar pagamento"
                                type="button"
                                onClick={handleCheckout}
                            />
                        </form>
                    </div>
                )
                }
            </Content>
        </Container>
    )
}