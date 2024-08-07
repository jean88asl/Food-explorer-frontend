import { useEffect, useState } from "react"
import { Container } from "./styles"

import { RiSearchLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { api } from "../../service/api";

export function InputSearch() {
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

    function handleFocusOff() {
        setShowResults(false)
        setResults([])
        setSearch("")
    }

    useEffect(() => {
        if (search.length === 0) {
            setShowResults(false)
            setResults([])
        }
    }, [search, setResults])

    return (
        <Container>
            <input
                placeholder="Busque por pratos ou ingredientes"
                onChange={e => setSearch(e.target.value)}
                value={search}
                onKeyDown={handleKeyDown}
                onInput={handleSearch}
                onBlur={handleFocusOff}
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
        </Container>
    )
}