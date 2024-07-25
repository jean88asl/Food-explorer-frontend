import { Routes, Route, Navigate } from "react-router-dom"

import { Home } from '../pages/Home'
import { Dish } from '../pages/Dish'
import { AddDish } from '../pages/Admin/AddDish'
import { EditDish } from "../pages/Admin/EditDish"
import { UserRequests } from "../pages/UserRequests"
import { NotFound } from "../pages/NotFound"
import { DishProvider } from "../contexts/DishContext"

export function AdminRoutes() {
    const user = localStorage.getItem("@foodexplorer:user")

    return (
        <DishProvider>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dish/:id' element={<Dish />} />
            <Route path='/add' element={<AddDish />} />
            <Route path='/editdish/:id' element={<EditDish />} />
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