import { useState } from "react"

import { IngredientsDish } from "../../../components/IngredientsDish"
import { Spinner } from "../../../components/Spinner"

import { BackLink } from "../components/BackLink"
import { FormDish } from "../components/FormDish"
import { TextArea } from "../components/TextArea"
import { ButtonForm } from "../components/ButtonForm"


import uploadImg from "../../../assets/upload.svg"

import { Container, ButtonsContainer, SectionForm, Wrapper, WrapperFile, IngredientsContainer, TextAreaContainer } from "../styles"
import { api } from "../../../service/api"

export function AddDish() {
    const [dishName, setDishName] = useState("")
    const [dishPrice, setDishPrice] = useState("")
    const [dishDescription, setDishDescription] = useState("")
    const [dishCategory, setDishCategory] = useState("")

    const [newIngredient, setNewIngredient] = useState("")
    const [ingredientsDish, setIngredientsDish] = useState([])

    const [imageDishFile, setImageDishFile] = useState(null)

    const [recording, setRecording] = useState(false)
    const [loading, setLoading] = useState(false)


    function handleAddIngredient() {
        if (!newIngredient) {
            return alert("Informe o ingrediente.")
        }

        setIngredientsDish([...ingredientsDish, newIngredient])
        setNewIngredient("")
    }

    function handleRemoveIngredient(nameIngredient) {
        setIngredientsDish(ingredientsDish => ingredientsDish.filter(ingredient => ingredient !== nameIngredient))
    }

    async function handleDishAdd() {
        setRecording(true)

        const ingredientsExist = ingredientsDish.length === 0

        if (!dishName || !dishPrice || !dishDescription || !dishCategory || ingredientsExist) {
            alert("todos os campos são obrigatórios")
            setRecording(false)
            return
        }

        const dishPriceDefault = Math.round(Number(dishPrice) * 100)

        const dish = {
            name: dishName.trim(),
            category: dishCategory.trim(),
            price: dishPriceDefault,
            description: dishDescription.trim(),
            ingredients: ingredientsDish
        }

        try {
            setLoading(true);
            if (!imageDishFile) {
                setRecording(false)
                return alert("Favor inclua a imagem do prato!")
            }

            const fileImageForm = new FormData()
            fileImageForm.append("image", imageDishFile)

            const { data } = await api.post("dish", dish)

            await api.patch(`/dish/image/${data.id}`, fileImageForm)

            alert("Prato adicionado com sucesso.")

            cleanFields()
        } catch (error) {
            console.log(error.message)
        } finally {
            setLoading(false);
            setRecording(false);
        }
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

    function cleanFields() {
        setDishName("")
        setDishCategory("")
        setIngredientsDish([])
        setDishPrice("")
        setDishDescription("")
        setImageDishFile(null)
        setRecording(false)
    }

    return (
        <Container>
            {loading ? (
                <Spinner />
            ) : (
                <main>
                    <BackLink
                        title="voltar"
                    />

                    <FormDish>
                        <fieldset>Adicionar prato</fieldset>

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
                                    placeholder="Ex: Salada Ceasar"
                                    id="name"
                                    onChange={e => setDishName(e.target.value)}
                                    value={dishName}
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

                            <Wrapper className="size-default">
                                <label htmlFor="">Preço</label>
                                <input
                                    type="number"
                                    placeholder="R$ 00,00"
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
                                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                            >
                            </TextArea>
                        </TextAreaContainer>

                        <ButtonsContainer>
                            <ButtonForm
                                title="Salvar alterações"
                                onClick={handleDishAdd}
                                disabled={recording}
                            />
                        </ButtonsContainer>
                    </FormDish>
                </main>
            )
            }
        </Container >
    )
}