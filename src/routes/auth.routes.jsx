import { Routes, Route, Navigate } from "react-router-dom"

import { Home } from '../pages/Home'
import { Dish } from '../pages/Dish'
import { UserRequests } from "../pages/UserRequests"
import { DefaultContainer } from "../layouts/DefaultLayout"
import { Favorites } from "../pages/Favorites"

import { DishProvider } from "../contexts/DishContext"
import { NotFound } from "../pages/NotFound"

export function AuthRoutes() {
    const user = localStorage.getItem("@foodexplorer:user")

    return (
        <DishProvider>
            <Routes>
                <Route path="/" element={<DefaultContainer />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/dish/:id' element={<Dish />} />
                    <Route path='/userrequests' element={<UserRequests />} />
                    <Route path='/favorites' element={<Favorites />} /> 
                </Route>

                {user ? (
                    <Route path="*" element={<NotFound />} />
                ) : (
                    <Route path="*" element={<Navigate to="/" />} />
                )}
            </Routes>
        </DishProvider>
    )
}