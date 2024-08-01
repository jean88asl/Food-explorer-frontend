/* eslint-disable react/prop-types */
import { Container, Header, MenuContent } from "./styles"
import { InputSearch } from "../../components/InputSearch"

import { RiCloseFill } from "react-icons/ri";

export function SideMenu({ menuIsOpen, onCloseMenu }) {
    return (
        <Container data-menu-is-open={menuIsOpen}>
            <Header>
                <button
                    onClick={onCloseMenu}
                    type="button"
                >
                    <RiCloseFill />
                    <span>Menu</span>
                </button>
            </Header>

            <MenuContent>
                <InputSearch />
            </MenuContent>
        </Container>
    )
}