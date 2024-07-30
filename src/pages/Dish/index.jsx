import { Link, useNavigate, useParams } from "react-router-dom";

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Tag } from "../../components/Tag"
import { ItemCounter } from "../../components/ItemCounter"
import { Button } from "../../components/Button"

import { useAuth } from "../../hooks/auth"
import { USER_ROLE } from "../../utils/roles"

import { IoIosArrowBack } from "react-icons/io";

import mealPlaceholder from '../../assets/meal-placeholder.jpg'

import { useEffect, useState } from "react";
import { api } from "../../service/api";

import { Container, DishLink, DishDetails, ImageContainer, Description, TagContainer } from "./styles";

export function Dish() {
    const { user } = useAuth()

    const [dataDish, setDataDish] = useState({})
    const [ingredients, setIngredients] = useState([])

    const urlImage = dataDish.image_dish === null ? mealPlaceholder : `${api.defaults.baseURL}/files/${dataDish.image_dish}`

    const params = useParams()
    const navigate = useNavigate()

    function handleNavigate() {
        navigate(`/editdish/${params.id}`)
    }

    useEffect(() => {
        async function fetchDataDish() {
            const response = await api.get(`/dish/${params.id}`)
            setDataDish(response.data.dish)
            setIngredients(response.data.ingredients)
        }

        fetchDataDish()
    }, [params])

    return (
        <Container>
            <Header />

            <main>
                <DishLink>
                    <Link to={'/'}>
                        <IoIosArrowBack />
                        voltar
                    </Link>
                </DishLink>

                <DishDetails>
                    <ImageContainer>
                        <img src={urlImage} alt="" />
                    </ImageContainer>

                    <Description>
                        <div>
                            <h2>{dataDish.name}</h2>

                            <p>{dataDish.description}</p>

                            <TagContainer>
                                {
                                    ingredients.map(ingredient => {
                                        return (
                                            <Tag
                                                key={ingredient.id}
                                                title={ingredient.name} />
                                        )
                                    })
                                }
                            </TagContainer>

                            {![USER_ROLE.ADMIN].includes(user.role) ?
                                <ItemCounter
                                    dishId={params.id}
                                    price={dataDish.price}
                                    nameDish={dataDish.name}
                                    url={urlImage}
                                />
                                :
                                <Button 
                                    title="Editar prato"
                                    className="bnt-dish"
                                    onClick={handleNavigate}
                                />
                            }
                        </div>
                    </Description>
                </DishDetails>
            </main>

            <Footer />
        </Container>
    )
}