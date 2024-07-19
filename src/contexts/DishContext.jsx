/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../service/api";

const DishContext = createContext({})

function DishProvider({ children }) {
    const [data, setData] = useState({})

    function addIngredient() {
        console.log(data)
    }

    useEffect(() => {
        async function fetchDataDish() {
            const response = await api.get(`/dish/22`)
            setData(response.data)
        }

        fetchDataDish()
    }, [])

    return (
        <DishContext.Provider value={{ addIngredient }}>
            {children}
        </DishContext.Provider>
    )
}

function useDish() {
    const context = useContext(DishContext)

    return context
}

export { DishProvider, useDish }