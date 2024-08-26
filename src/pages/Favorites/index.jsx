import { useEffect, useState } from "react"
import { Container, Card } from "./styles"
import { api } from "../../service/api"
import { Link } from "react-router-dom"
import { Spinner } from "../../components/Spinner"

export function Favorites() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    async function handleRemoveFavorite(id) {
        const verification = confirm("Tem certeza que deseja apagar esse prato dos favoritos?")

        if (verification) {
            setLoading(true)
            const newData = data.filter(dish => dish.id_favorites !== id)

            try {
                await api.delete(`likes/${id}`)
                setData(newData)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
    }

    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            try{                
                const response = await api.get("likes")
                console.log(response.data)
                setData(response.data)
            } catch(error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    return (
        <Container>

            {loading ? (
                <Spinner />
            ) : (
                <>
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
                </>
            )
            }
        </Container >
    )
}