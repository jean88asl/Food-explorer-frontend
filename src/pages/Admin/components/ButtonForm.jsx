/* eslint-disable react/prop-types */
import { Container } from "./styles-button-form"

export function ButtonForm({ title, onClick, recording, ...rest }) {
    return (
        <Container            
            onClick={onClick}
            disabled={recording}
            type="button"
            {...rest}
        >
            {title}
        </Container>
    )
}