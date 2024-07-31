/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { FiPlus, FiMinus } from "react-icons/fi";
import { Container, GroupButtons, QuantityButton, ExternalButton } from "./styles"
import { useEffect, useState } from "react";

import { useDish } from "../../contexts/DishContext"

export function ItemCounter({ dishId, price, nameDish, url }) {
    const [quantity, setQuantity] = useState(0)
    const [total, setTotal] = useState(0)
    const [formattedPrice, setFormattedPrice] = useState("")

    const { priceFormatting, orderInfo } = useDish()

    const navigate = useNavigate()

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

    function handleGoToOrders() {
        if (quantity >= 1) {
            orderInfo(total, quantity, dishId, nameDish, url)

            const finishRequest = confirm("Tem certeza que deseja finalizar o pedido?")

            if (finishRequest) {
                navigate("/userrequests")
            }
        } else {
            alert("Favor inclua ao menos um item!")
        }
    }

    useEffect(() => {
        const newPriceValue = priceFormatting(total)

        setFormattedPrice(newPriceValue)
    }, [total, priceFormatting])

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

                <ExternalButton onClick={handleGoToOrders}>
                    {
                        !price ? (`incluir`) : (`incluir ${String.fromCharCode(8226)} ${formattedPrice}`)
                    }
                </ExternalButton>
        </Container>
    )
}