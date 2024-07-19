/* eslint-disable react/prop-types */
import { FiPlus, FiMinus } from "react-icons/fi";
import { Container, GroupButtons, QuantityButton, ExternalButton } from "./styles"
import { useEffect, useState } from "react";

export function ItemCounter({ dishId, price }) {
    const [quantity, setQuantity] = useState(0)
    const [total, setTotal] = useState(0)
    const [formattedPrice, setFormattedPrice] = useState("")

    function handleAddItem() {
        if (quantity >= 0) {
            let quantityPartial = quantity + 1
            setQuantity(quantityPartial)

            let totalPartial = quantityPartial * price
            setTotal(totalPartial)
        }
    }

    function handleRemoveItem() {
        if (quantity >= 1) {
            let quantityPartial = quantity - 1
            setQuantity(quantityPartial)

            let totalPartial = quantityPartial * price
            setTotal(totalPartial)
        } else {
            alert("A quantidade minima é de um item.")
        }
    }

    useEffect(() => {
        const price = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2
        }).format(total / 100)

        setFormattedPrice(price)
    }, [total])

    return (
        <Container>
            <GroupButtons>
                <QuantityButton onClick={handleRemoveItem}>
                    <FiMinus />
                </QuantityButton>
                <span>{String(quantity).padStart(2, 0)}</span>
                <QuantityButton onClick={handleAddItem}>
                    <FiPlus />
                </QuantityButton>
            </GroupButtons>

            <ExternalButton>
                {
                    !price ? (`incluir`) : (`incluir ${String.fromCharCode(8226)} ${formattedPrice}`) 
                }
            </ExternalButton>
        </Container>
    )
}