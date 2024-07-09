import { Routes, Route } from "react-router-dom"

import { Home } from '../pages/Home'
import { Dish } from '../pages/Dish'
import { AddDish } from '../pages/AddDish'

export function AuthRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dish' element={<Dish />} />
            <Route path='/add' element={<AddDish />} />
        </Routes>
    )
}