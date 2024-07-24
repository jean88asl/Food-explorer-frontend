import { Routes, Route, Navigate } from "react-router-dom"

import { Home } from '../pages/Home'
import { Dish } from '../pages/Dish'
import { UserRequests } from "../pages/UserRequests"

import { DishProvider } from "../contexts/DishContext"
import { NotFound } from "../pages/NotFound"

export function AuthRoutes() {
    const user = localStorage.getItem("@foodexplorer:user")

    return (
        <DishProvider>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/dish/:id' element={<Dish />} />
                <Route path='/userrequests' element={<UserRequests />} />

                {user ? (
                    <Route path="*" element={<NotFound />} />
                ) : (
                    <Route path="*" element={<Navigate to="/" />} />
                )}
            </Routes>
        </DishProvider>
    )
}