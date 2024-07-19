/* eslint-disable react/prop-types */
import { Container } from "./styles"
import { RiAddFill, RiCloseLine } from "react-icons/ri"

export function IngredientsDish({ isNew: isnew, value, onClick, ...rest }) {
    return (
        <Container $isnew={isnew}>
            <input
                type="text"
                value={value}
                readOnly={!isnew}
                {...rest}
            />
            <button
                type="button"
                onClick={onClick}
            >
                {isnew ? <RiAddFill /> : <RiCloseLine />}
            </button>
        </Container>
    )
}