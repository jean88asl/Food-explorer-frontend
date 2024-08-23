/* eslint-disable react/prop-types */
import { InputSearch } from "../../components/InputSearch"

import { RiCloseFill } from "react-icons/ri";
import { PiSignOutFill, PiStarThin, PiBowlFood } from "react-icons/pi";
import { BsClockHistory } from "react-icons/bs";

import { Container, Header, MenuContent, BtnSideBar } from "./styles"
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles"

export function SideMenu({ menuIsOpen, onCloseMenu }) {
    const { signOut, user } = useAuth()
    const navigate = useNavigate()

    function handleNavigation(option) {
        if (option === 1) {
            navigate("/favorites")
            onCloseMenu()
        } if (option === 2) {
            navigate("/add")
            onCloseMenu()
        } if (option === 3) {
            navigate("/history")
            onCloseMenu()
        }if (option === 4) {
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
                <InputSearch onCloseMenu={onCloseMenu}/>

                <div className="buttons-group">
                    {![USER_ROLE.ADMIN].includes(user.role) ?
                        <BtnSideBar onClick={() => handleNavigation(1)}>
                            <PiStarThin /> Meus Favoritos
                        </BtnSideBar>
                        :
                        <>
                        <BtnSideBar onClick={() => handleNavigation(2)}>
                            <PiBowlFood /> Novo Prato
                        </BtnSideBar>
                        
                     </>
                    }
                    <BtnSideBar onClick={() => handleNavigation(3)}>
                        <BsClockHistory /> Histórico de pedidos
                    </BtnSideBar>
                    <BtnSideBar onClick={() => handleNavigation(4)}>
                        <PiSignOutFill /> Sair
                    </BtnSideBar>
                </div>

            </MenuContent>
        </Container>
    )
}