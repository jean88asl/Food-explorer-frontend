/* eslint-disable react/prop-types */
import Logo from "../../assets/logo.svg"
import Receipt from "../../assets/receipt.svg";

import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles"

import { FaArrowRightFromBracket } from "react-icons/fa6";
import { BsList, BsFillStarFill, BsClockHistory } from "react-icons/bs";

import { Link, useNavigate } from "react-router-dom";

import { useDish } from "../../contexts/DishContext"

import { Container, LogoContainer, HeaderContainer, ButtonRequests, ButtonSignOut, BtnMenu, ContainerFavoriteis, HistoryLink } from "./styles"
import { InputSearch } from "../InputSearch";

export function Header({ onOpenMenu }) {
    const { signOut, user } = useAuth()
    const navigate = useNavigate()

    const { itemsQuantity } = useDish()

    function handleNavigate(option) {
        if (option === 1) {
            navigate("/userrequests")
        } if (option === 2) {
            navigate("/add")
        } if (option === 3) {
            navigate("/favorites")
        }
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
                            <h1>
                                <Link to={"/"}>
                                    food explorer
                                </Link>
                            </h1>
                            {
                                [USER_ROLE.ADMIN].includes(user.role) &&
                                <p>admin</p>
                            }
                        </div>                    
                </LogoContainer>

                <span>
                    <InputSearch />
                </span>

                { 
                    ![USER_ROLE.ADMIN].includes(user.role) ? (        
                    <ContainerFavoriteis>
                            <button type="button" onClick={() => handleNavigate(3)} title="favoritos">
                                <BsFillStarFill />
                            </button>
                    </ContainerFavoriteis>
                    ) : (
                        <HistoryLink to={"/history"}>
                            <BsClockHistory 
                                size={32}
                                title="Histórico de pedidos"
                            />
                        </HistoryLink>
                    )
                }

                {
                    [USER_ROLE.ADMIN].includes(user.role) ?
                        <ButtonRequests onClick={() => handleNavigate(2)} className="admin-login">
                            Novo Prato
                        </ButtonRequests>
                        : <>
                            <ButtonRequests onClick={() => handleNavigate(1)}>
                                <img src={Receipt} alt="" />
                                <span>Pedidos ({itemsQuantity})</span>
                                <div className="user-login">{itemsQuantity}</div>
                            </ButtonRequests>
                        </>
                }

                <ButtonSignOut onClick={handleSignOut} title="sair">
                    <FaArrowRightFromBracket />
                </ButtonSignOut>
            </HeaderContainer>
        </Container>
    )
}