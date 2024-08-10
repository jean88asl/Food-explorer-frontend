import { useEffect, useState } from "react"
import { Container, Card } from "./styles"
import { api } from "../../service/api"
import { Link } from "react-router-dom"

export function Favorites() {
    const [data, setData] = useState([])

    async function handleRemoveFavorite(id) {
        const verification = confirm("Tem certeza que deseja apagar esse prato dos favoritos?")

        if (verification) {
            const newData = data.filter(dish => dish.id_favorites !== id)

            try {
                await api.delete(`likes/${id}`)
                setData(newData)
            } catch (error) {
                console.log(error)
            }
        } 
    }

    useEffect(() => {
        async function fetchData() {
            const response = await api.get("likes")
            console.log(response.data)
            setData(response.data)
        }

        fetchData()
    }, [])

    return (
        <Container>
            <h1>Meus favoritos</h1>

            <main>
                {
                    data &&
                    data.map(item => {
                        return (
                            <Card key={item.id_favorites}>
                                <img src={`${api.defaults.baseURL}/files/${item.image_dish}`} alt="" />

                                <div>
                                    <Link to={`/dish/${item.dish_id}`}> &#62; {item.name}</Link>
                                    <button onClick={() => handleRemoveFavorite(item.id_favorites)}>
                                        Remover dos Favoritos
                                    </button>
                                </div>
                            </Card>
                        )
                    })
                }
            </main>
        </Container>
    )
}