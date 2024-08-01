import { Outlet } from "react-router-dom"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

import { Container, Content } from './styles'
import { SideMenu } from "../../components/SideMenu"
import { useState } from "react"


export function DefaultContainer() {
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    return (
        <Container>
            <SideMenu menuIsOpen={menuIsOpen}
                onCloseMenu={() => setMenuIsOpen(false)}
            />
            <Header onOpenMenu={() => setMenuIsOpen(true)}/>
            <Content>
                <Outlet />
            </Content>
            <Footer />
        </Container>
    )
}