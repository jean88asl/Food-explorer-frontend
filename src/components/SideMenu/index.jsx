import { Container, LogoContainer } from "./styles"

import { Logo } from "../../assets/logo.svg"

export function SideMenu() {
    return (
        <Container>

            <LogoContainer>
                <img src={Logo} alt="" />
                <div>
                    <h1>food explorer</h1>
                    {
                        // [USER_ROLE.ADMIN].includes(user.role) &&
                        <p>admin</p>
                    }
                </div>
            </LogoContainer>
        </Container>
    )
}