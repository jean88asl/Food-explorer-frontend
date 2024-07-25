/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"

import { useDish } from "../../contexts/DishContext"
import { USER_ROLE } from "../../utils/roles"
import { useAuth } from "../../hooks/auth"

import { RiHeartFill, RiHeartLine } from "react-icons/ri";
import { PiPencilSimpleLight } from "react-icons/pi";
import { ItemCounter } from "../ItemCounter"
import mealPlaceholder from '../../assets/meal-placeholder.jpg'

import { Container, IconCard, PriceContainer } from "./styles";

import { api } from "../../service/api";

export function Card({ url, dishName, description, price, id }) {
    const { user } = useAuth()
    const navigate = useNavigate()

    const urlImage = url ? `${api.defaults.baseURL}/files/${url}` : mealPlaceholder

    const { priceFormatting } = useDish()

    const formattedPrice = priceFormatting(price)

    const [liked, setLiked] = useState(0)
    let likedIsTrue = liked === 1

    async function handleLike() {
        if (liked === 0) {
            await api.put(`likes/${id}`)
            setLiked(null)
        }

        await api.post(`likes/${id}`)
        setLiked(1)
    }

    function handleNavigate() {
        navigate(`/dish/${id}`)
    }

    useEffect(() => {
        async function FetchData() {
            const response = await api.get(`likes/${id}`)
            setLiked(response.data.liked)
        }
        FetchData()
    }, [id])

    return (
        <Container>
            {![USER_ROLE.ADMIN].includes(user.role) ?
                <IconCard>
                    {likedIsTrue ? (
                        <button disabled>
                            <RiHeartFill
                                className="liked"
                            />
                        </button>
                    ) : (
                        <button onClick={handleLike}>
                            <RiHeartLine />
                        </button>
                    )}
                </IconCard> :
                <IconCard>
                    <button title="editar" onClick={handleNavigate}>
                        <PiPencilSimpleLight />
                    </button>
                </IconCard>
            }
            <img src={urlImage} alt="" />
            <Link to={`/dish/${id}`}>
                {dishName} &#62;
            </Link>
            <p>{description}</p>

            <PriceContainer>{formattedPrice}</PriceContainer>

            {
                ![USER_ROLE.ADMIN].includes(user.role) &&
                <ItemCounter
                    dishId={id}
                />
            }
        </Container>
    )
}