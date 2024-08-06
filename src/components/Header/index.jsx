/* eslint-disable react/prop-types */
import Logo from "../../assets/logo.svg"
import Receipt from "../../assets/receipt.svg";

import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles"

import { FaArrowRightFromBracket } from "react-icons/fa6";
import { BsList } from "react-icons/bs";

import { useNavigate } from "react-router-dom";

import { useDish } from "../../contexts/DishContext"

import { Container, LogoContainer, HeaderContainer, ButtonRequests, ButtonSignOut, BtnMenu } from "./styles"
import { InputSearch } from "../InputSearch";

export function Header({ onOpenMenu }) {
    const { signOut, user } = useAuth()
    const navigate = useNavigate()

    const { itemsQuantity } = useDish()

    function handleNavigate() {
        navigate("/userrequests")
    }

    function handleNavigateAdmin() {
        navigate("/add")
    }

    function handleSignOut() {
        navigate("/")
        signOut()
    }

    return (
        <Container>
            <HeaderContainer>
                <BtnMenu onClick={onOpenMenu}>
                    <BsList />
                </BtnMenu>

                <LogoContainer>
                    <img src={Logo} alt="" />
                    <div>
                        <h1>food explorer</h1>
                        {
                            [USER_ROLE.ADMIN].includes(user.role) &&
                            <p>admin</p>
                        }
                    </div>
                </LogoContainer>

                <InputSearch />

                {
                    [USER_ROLE.ADMIN].includes(user.role) ?
                        <ButtonRequests onClick={handleNavigateAdmin} className="admin-login">
                            Novo Prato
                        </ButtonRequests>
                        : <>
                            <ButtonRequests onClick={handleNavigate}>
                                <img src={Receipt} alt="" />
                                <span>Pedidos ({itemsQuantity})</span>
                                <div className="user-login">{itemsQuantity}</div>
                            </ButtonRequests>
                        </>
                }

                <ButtonSignOut onClick={handleSignOut}>
                    <FaArrowRightFromBracket />
                </ButtonSignOut>
            </HeaderContainer>
        </Container>
    )
}