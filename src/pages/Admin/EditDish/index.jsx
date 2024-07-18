import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { IngredientsDish } from "../../../components/IngredientsDish"
import { Footer } from "../../../components/Footer"

import { Header } from "../../../components/Header"
import { BackLink } from "../components/BackLink"
import { FormDish } from "../components/FormDish"
import { TextArea } from "../components/TextArea"
import { ButtonForm } from "../components/ButtonForm"

import uploadImg from "../../../assets/upload.svg"

import { Container, ButtonsContainer, SectionForm, Wrapper, WrapperFile, IngredientsContainer, TextAreaContainer } from "./styles"
import { api } from "../../../service/api"

// import { useDish } from "../../../contexts/DishContext"

export function EditDish() {
    const [dishName, setDishName] = useState("")
    const [dishPrice, setDishPrice] = useState("")
    const [dishDescription, setDishDescription] = useState("")
    const [dishCategory, setDishCategory] = useState("")

    const [newIngredient, setNewIngredient] = useState("")
    const [ingredientsDish, setIngredientsDish] = useState([])

    const [imageDishFile, setImageDishFile] = useState(null)

    const params = useParams()
    const navigate = useNavigate()

    // const { addIngredient } = useDish()

    function handleAddIngredient() {
        if (!newIngredient) {
            return alert("Informe o ingrediente.")
        }

        const ingredientExist = ingredientsDish.find(ingredient => ingredient === newIngredient)

        if (ingredientExist) {
            return alert("Esse ingrediente já foi adicionado.")
        }

        setIngredientsDish([...ingredientsDish, newIngredient])
        setNewIngredient("")
    }

    function handleRemoveIngredient(nameIngredient) {
        setIngredientsDish(ingredientsDish => ingredientsDish.filter(ingredient => ingredient !== nameIngredient))
    }

    function handleIncludeDishImage(event) {
        const file = event.target.files[0]

        const name = file.name

        const newFileName = name.replace(" ", "-").trim()
        const renamedFile = new File([file], newFileName, {
            type: file.type,
            lastModified: file.lastModified,
        });

        setImageDishFile(renamedFile)
    }

    async function handleUpdate() {     
        const ingredientsExist = ingredientsDish.length === 0

        if (!dishName || !dishPrice || !dishDescription || !dishCategory || ingredientsExist) {
            return alert("todos os campos são obrigatórios")
        }
        
        const dishPriceDefault = Math.round(Number(dishPrice) * 100)

        const dishEdited = {
            name: dishName,
            category: dishCategory,
            price: dishPriceDefault,
            description: dishDescription,
            ingredients: ingredientsDish
        }

        try {
            await api.put(`/dish/${params.id}`, dishEdited)

            if (imageDishFile) {
                const fileImageForm = new FormData()
                fileImageForm.append("image", imageDishFile)

                await api.patch(`/dish/image/${params.id}`, fileImageForm)

                alert("Imagem alterada com sucesso.")
            }

            return alert("Prato editado com sucesso.")
        } catch (error) {
            if (error) {
                return console.log(error)
            } else {
                return console.log("Não foi possível realizar a alteração.")
            }
        }
    }

    async function handleDeleteDish() {
        const isTrue = confirm("Esse prato será excluído, deseja prosseguir com a exclusão?")

        if (!isTrue) {
            return alert("A exclusão do prato foi cancelada.")
        }

        try {
            await api.delete(`/dish/${params.id}`)
            alert("Prato excluído com sucesso")
            return navigate("/")
        } catch (error) {
            if (error) {
                return console.log(error)
            } else {
                return console.log("Não foi possível realizar a alteração.")
            }
        }
    }

    useEffect(() => {
        async function fetchDataDish() {
            const response = await api.get(`/dish/${params.id}`)
            setDishName(response.data.dish.name)
            setDishCategory(response.data.dish.category)
            setDishPrice(response.data.dish.price / 100)
            setDishDescription(response.data.dish.description)

            const listIngredients = response.data.ingredients
            const ingredients = listIngredients.map(ingredient => ingredient.name)

            setIngredientsDish(ingredients)
        }

        fetchDataDish()
    }, [params])

    return (
        <Container>
            <Header />

            <main>
                <BackLink
                    title="voltar"
                />

                <FormDish
                    formTitle="Editar prato"
                >
                    <SectionForm>
                        <WrapperFile>
                            <p>Imagem do prato</p>

                            <label htmlFor="file">
                                <img src={uploadImg} alt="" />
                                Selecione a Imagem
                                <input
                                    type="file"
                                    id="file"
                                    accept="image/jpg,image/jpeg,image/png,image/gif,image/bmp,image/tiff"
                                    onChange={handleIncludeDishImage}
                                />
                            </label>
                        </WrapperFile>

                        <Wrapper>
                            <label htmlFor="name">Nome</label>
                            <input
                                type="text"
                                id="name"
                                value={dishName}
                                onChange={e => setDishName(e.target.value)}
                            />
                        </Wrapper>

                        <Wrapper>
                            <label htmlFor="category">Categoria</label>
                            <select
                                name="category"
                                id="category"
                                onChange={e => setDishCategory(e.target.value)}
                                value={dishCategory}
                            >
                                <option value="">-- tipo --</option>
                                <option value="refeição">Refeições</option>
                                <option value="sobremesas">Sobremesas</option>
                                <option value="bebidas">Bebidas</option>
                            </select>
                        </Wrapper>
                    </SectionForm>

                    <SectionForm>
                        <IngredientsContainer>
                            <p>Ingredientes</p>
                            <div>
                                <IngredientsDish
                                    isNew
                                    placeholder="adicionar"
                                    value={newIngredient}
                                    onChange={e => setNewIngredient(e.target.value)}
                                    onClick={handleAddIngredient}
                                />

                                {
                                    ingredientsDish.map(ingredient => {
                                        return (
                                            <IngredientsDish
                                                key={ingredient}
                                                value={ingredient}
                                                onClick={() => handleRemoveIngredient(ingredient)}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </IngredientsContainer>

                        <Wrapper className="teste">
                            <label htmlFor="">Preço</label>
                            <input
                                type="number"
                                onChange={e => setDishPrice(e.target.value)}
                                value={dishPrice}
                            />
                        </Wrapper>
                    </SectionForm>

                    <TextAreaContainer>
                        <legend>Descrição</legend>
                        <TextArea
                            onChange={e => setDishDescription(e.target.value)}
                            value={dishDescription}
                        >
                        </TextArea>
                    </TextAreaContainer>

                    <ButtonsContainer>
                        <ButtonForm
                            title="Excluir Prato"
                            onClick={handleDeleteDish}
                            className="delete"
                        />
                        <ButtonForm
                            title="Salvar alterações"
                            onClick={handleUpdate}
                        />
                    </ButtonsContainer>
                </FormDish>
            </main>

            <Footer />
        </Container>
    )
}