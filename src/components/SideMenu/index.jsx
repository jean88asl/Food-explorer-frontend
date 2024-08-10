/* eslint-disable react/prop-types */
import { InputSearch } from "../../components/InputSearch"

import { RiCloseFill } from "react-icons/ri";
import { PiSignOutFill, PiStarThin } from "react-icons/pi";

import { Container, Header, MenuContent, BtnSideBar } from "./styles"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

export function SideMenu({ menuIsOpen, onCloseMenu }) {
    const { signOut } = useAuth()
    const navigate = useNavigate()

    function handleNavigation(option) {
        if (option === 1) {
            navigate("/favorites")
            onCloseMenu()
        } if (option === 2) {
            navigate("/")
            signOut()
        }
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
                <InputSearch className="side-menu" />

                <div className="buttons-group">
                    <BtnSideBar onClick={() => handleNavigation(1)}>
                    <PiStarThin />Meus Favoritos
                    </BtnSideBar>

                    <BtnSideBar onClick={() => handleNavigation(2)}>
                        <PiSignOutFill /> Sair
                    </BtnSideBar>
                </div>

            </MenuContent>
        </Container>
    )
}