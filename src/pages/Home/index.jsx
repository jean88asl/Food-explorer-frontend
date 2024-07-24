import { Header } from "../../components/Header";
import { Container, Content, Banner, BannerContent } from "./styles";
import { Footer } from "../../components/Footer"
import { Section } from "../../components/Section"
import banner from "../../assets/banner.png"

import { api } from "../../service/api"

import { useEffect, useState } from "react";
import { SwiperComponent } from "./components/SwiperComponent";

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

    const sizeArrayMeals = meals.length > 3
    const sizeArrayDrinks = drinks.length > 3
    const sizeArrayDesserts = desserts.length > 3

    console.log(sizeArrayDesserts)
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
                    {
                        sizeArrayMeals ? (
                            <div>
                                <SwiperComponent items={meals} />
                            </div>
                        ) : (
                            <></>
                        )
                    }
                </Section>

                <Section title="Sobremesas">
                    {
                        sizeArrayDesserts ? (
                            <div>
                                <SwiperComponent items={desserts} />
                            </div>
                        ) : (
                            <></>
                        )
                    }
                </Section>

                <Section title="bebidas">
                    {
                        sizeArrayDrinks ? (
                            <div>
                                <SwiperComponent items={desserts} />
                            </div>
                        ) : (
                            <></>
                        )
                    }
                </Section>
            </Content>
            <Footer />
        </Container>
    )
}