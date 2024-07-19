/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { api } from "../../service/api";

import { RiHeartFill, RiHeartLine } from "react-icons/ri";
import { ItemCounter } from "../ItemCounter"
import mealPlaceholder from '../../assets/meal-placeholder.jpg'

import { Container, Heart, PriceContainer } from "./styles";

export function Card({ url, dishName, description, price, id }) {
    const urlImage = url ? `${api.defaults.baseURL}/files/${url}` : mealPlaceholder

    const formattedPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    }).format(price / 100)

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

    useEffect(() => {
        async function FetchData() {
            const response = await api.get(`likes/${id}`)
            setLiked(response.data.liked)
        }
        FetchData()
    }, [id])

    return (
        <Container>
            <Heart>
                {
                    likedIsTrue ? (
                        <button disabled>
                            <RiHeartFill
                                className="liked"
                            />
                        </button>
                    ) : (
                        <button onClick={handleLike}>
                            <RiHeartLine />
                        </button>
                    )
                }
            </Heart>
            <img src={urlImage} alt="" />
            <Link to={`/dish/${id}`}>
                {dishName} &#62;
            </Link>
            <p>{description}</p>

            <PriceContainer>{formattedPrice}</PriceContainer>

            <ItemCounter
                dishId={id}
            />
        </Container>
    )
}