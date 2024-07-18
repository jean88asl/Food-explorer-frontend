/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io"

import { Container } from "./styles-back-link"

export function BackLink({ title }) {
    return (
        <Container>
            <Link to={'/'}>
                <IoIosArrowBack />
                {title}
            </Link>
        </Container>
    )
}