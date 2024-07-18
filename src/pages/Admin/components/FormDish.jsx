/* eslint-disable react/prop-types */
import { Container } from "./styles-form-dish"

export function FormDish({ formTitle, children, ...rest }) {
    return (
        <Container {...rest}>
            <fieldset>{formTitle}</fieldset>
            {children}
        </Container>
    )
}