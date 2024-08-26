import { Section } from "../../components/Section"
import { Spinner } from "../../components/Spinner"
import banner from "../../assets/banner.png"
import { api } from "../../service/api"

import { useEffect, useState } from "react";
import { SwiperComponent } from "./components/SwiperComponent";

import { Container, Content, Banner } from "./styles";

export function Home() {
    const [dishData, setDishData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            try {
                const response = await api.get("dish")
                setDishData(response.data)
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    const meals = dishData.filter(meal => meal.category === 'refeição')
    const desserts = dishData.filter(dessert => dessert.category === 'sobremesas')
    const drinks = dishData.filter(drink => drink.category === 'bebidas')

    const sizeArrayMeals = meals.length > 3
    const sizeArrayDrinks = drinks.length > 3
    const sizeArrayDesserts = desserts.length > 3

    return (
        <Container>
            {loading ? (
                <Spinner />
            ) : (
                <Content>
                    <Banner>
                        <div></div>
                        <img src={banner} alt="" />
                        <section>
                            <h2>Sabores inigualáveis</h2>
                            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                        </section>
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
                                    <SwiperComponent items={drinks} />
                                </div>
                            ) : (
                                <></>
                            )
                        }
                    </Section>
                </Content>
            )
            }
        </Container>
    )
}