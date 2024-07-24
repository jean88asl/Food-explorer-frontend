/* eslint-disable react/prop-types */
import { Container, OrderImage, ItemInfo } from "./order-line"

export function OrderLine({ nameDish, quantity, price, urlImage, ...rest}) {
    return (
        <Container>
            <div>
                <OrderImage src={urlImage} alt="" />

                <ItemInfo>
                    <p>{quantity}x  {nameDish} <span>R${price}</span></p>
                    <button {...rest}>Excluir</button>
                </ItemInfo>
            </div>
        </Container>
    )
}