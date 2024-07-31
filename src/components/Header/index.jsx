import Logo from "../../assets/logo.svg"
import Receipt from "../../assets/receipt.svg";

import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles"

import { RiSearchLine } from "react-icons/ri";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { BsList } from "react-icons/bs";

import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../service/api";

import { Container, LogoContainer, HeaderContainer, ButtonRequests, ButtonSignOut, SearchContainer, BtnMenu } from "./styles"

export function Header() {
    const { signOut, user } = useAuth()
    const navigate = useNavigate()

    const [search, setSearch] = useState("")
    const [results, setResults] = useState([])
    const [showResults, setShowResults] = useState(false)

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch()
        }
    };

    async function handleSearch() {
        if (search.length > 2) {
            const response = await api(`/dish?name=${search}`)

            setResults(response.data)
            setShowResults(true)
        }
    }

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

    useEffect(() => {
        if (search.length === 0) {
            setShowResults(false)
            setResults([])
        }
    }, [search, setResults])

    return (
        <Container>
            <HeaderContainer>
                <BtnMenu>
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

                <SearchContainer>
                    <input
                        placeholder="Busque por pratos ou ingredientes"
                        onChange={e => setSearch(e.target.value)}
                        onKeyDown={handleKeyDown}
                        onInput={handleSearch}
                    />

                    <button onClick={handleSearch}>
                        <RiSearchLine />
                    </button>


                    {
                        showResults && (
                            <div className="results">
                                {
                                    results.map((item, index) => (
                                        <Link to={`/dish/${item.id}`} key={index}>
                                            <p >{item.dish_name}</p>
                                            <span>ver prato &#62;</span>
                                        </Link>
                                    ))
                                }
                            </div>
                        )
                    }
                </SearchContainer>

                {
                    [USER_ROLE.ADMIN].includes(user.role) ?
                        <ButtonRequests onClick={handleNavigateAdmin}>
                            Novo Prato
                        </ButtonRequests>
                        : <>
                            <ButtonRequests onClick={handleNavigate}>
                                <img src={Receipt} alt="" />
                                <span>Pedidos (0)</span>
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