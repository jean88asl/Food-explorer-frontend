import { Container, LogoContainer, HeaderContainer, ButtonRequests, ButtonSignOut } from "./styles"
import Logo from "../../assets/logo.svg"
import Receipt from "../../assets/receipt.svg";
import { Input } from "../Input"
import { RiSearchLine } from "react-icons/ri";
import { FaArrowRightFromBracket } from "react-icons/fa6";

import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

export function Header() {
    const { signOut } = useAuth()
    const navigate = useNavigate()

    function handleNavigate() {
        navigate("/userrequests")
    }

    return (
        <Container>
            <HeaderContainer>
                <LogoContainer>
                    <img src={Logo} alt="" />
                    <h1>food explorer</h1>
                </LogoContainer>

                <Input
                    className="input-header"
                    placeholder="Busque por pratos ou ingredientes"
                    icon={RiSearchLine}
                />                

                <ButtonRequests onClick={handleNavigate}>
                    <img src={Receipt} alt="" />
                    Pedidos (0)
                </ButtonRequests>

                <ButtonSignOut onClick={signOut}>
                    <FaArrowRightFromBracket />
                </ButtonSignOut>
            </HeaderContainer>
        </Container>
    )
}