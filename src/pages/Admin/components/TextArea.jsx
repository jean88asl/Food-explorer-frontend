/* eslint-disable react/prop-types */
import { Container } from "./styles-textarea"

export function TextArea({ value, ...rest }) {
    return (
        <Container {...rest}
            value={value}         
        >
        </Container>
    )
}