import { Container, SpinnerContainerOne, SpinnerContainerTwo } from "./styles"

export function Spinner() {
    return (
        <Container>
            <section>
                <SpinnerContainerOne />
                <SpinnerContainerTwo />
            </section>
        </Container>
    )
}