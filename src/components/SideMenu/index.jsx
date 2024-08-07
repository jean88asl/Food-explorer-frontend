/* eslint-disable react/prop-types */
import { InputSearch } from "../../components/InputSearch"

import { RiCloseFill } from "react-icons/ri";

import { Container, Header, MenuContent, LogOut } from "./styles"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

export function SideMenu({ menuIsOpen, onCloseMenu }) {
    const { signOut } = useAuth()
    const navigate = useNavigate()

    function handleSignOut() {
        navigate("/")
        signOut()
    }

    return (
        <Container data-menu-is-open={menuIsOpen}>
            <Header>
                <button
                    onClick={onCloseMenu}
                    type="button"
                >
                    <RiCloseFill />
                    Menu
                </button>
            </Header>

            <MenuContent>
               <InputSearch data-sidebar={true} className="side-menu-on"/>
               
               <LogOut onClick={handleSignOut}>
                    Sair
               </LogOut>
            </MenuContent>
        </Container>
    )
}