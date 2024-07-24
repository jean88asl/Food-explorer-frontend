import { Header } from "../../components/Header";
import { Container, Content, Banner, BannerContent } from "./styles";
import { Footer } from "../../components/Footer"
import { Section } from "../../components/Section"
import banner from "../../assets/banner.png"

import { api } from "../../service/api"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import { Card } from "../../components/Card";
import { useEffect, useState } from "react";

export function Home() {
    const [dishData, setDishData] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await api.get("dish")
            setDishData(response.data)
        }

        fetchData()
    }, [])

    const meals = dishData.filter(meal => meal.category === 'refeição')
    const desserts = dishData.filter(dessert => dessert.category === 'sobremesas')
    const drinks = dishData.filter(drink => drink.category === 'bebidas')

    return (
        <Container>
            <Header />
            <Content>
                <Banner>
                    <BannerContent>
                        <div>
                            <h2>Sabores inigualáveis</h2>
                            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                        </div>
                        <img src={banner} alt="" />
                    </BannerContent>
                </Banner>

                <Section title="Refeições">
                    <div>
                        {desserts &&
                            desserts.map(meal => {
                                return (
                                    <Card
                                        key={meal.id}
                                        dishName={meal.name}
                                        description={meal.description}
                                        price={meal.price}
                                        url={meal.image_dish}
                                        id={meal.id}
                                    />
                                )
                            })
                        }
                    </div>
                </Section>

                <Section title="Sobremesas">
                    <div>
                        <Swiper
                            modules={[Pagination, Navigation]}
                            slidesPerView={3.5}
                            allowSlideNext={true}
                            spaceBetween={0}
                            loop={true}
                            navigation
                            rewind={true}
                            loopPreventsSliding={true}
                            className="test"
                        >
                            {/* https://swiperjs.com/swiper-api#prop-swiper-animating */}
                            {meals &&
                                meals.map(dessert => {
                                    return (
                                        <SwiperSlide key={dessert.id}>
                                            <Card
                                                dishName={dessert.name}
                                                description={dessert.description}
                                                price={dessert.price}
                                                url={dessert.image_dish}
                                                id={dessert.id}
                                            />
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
                </Section>

                <Section title="bebidas">
                    <div>
                        {drinks &&
                            drinks.map(drink => {
                                return (
                                    <Card
                                        key={drink.id}
                                        dishName={drink.name}
                                        description={drink.description}
                                        price={drink.price}
                                        url={drink.image_dish}
                                        id={drink.id}                                        
                                    />
                                )
                            })
                        }
                    </div>
                </Section>
            </Content>
            <Footer />
        </Container>
    )
}