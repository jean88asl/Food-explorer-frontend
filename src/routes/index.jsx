import { BrowserRouter } from "react-router-dom"
import { useAuth } from "../hooks/auth"
import { USER_ROLE } from "../utils/roles"

import { AppRoutes } from "./app.routes"
import { AuthRoutes } from "./auth.routes"
import { AdminRoutes } from "./admin.routes"

export function Routes() {
    const { user } = useAuth()

    function AccessRoute() {
        switch (user.role) {
            case USER_ROLE.ADMIN:
                return <AdminRoutes />
            case USER_ROLE.USER:
                return <AuthRoutes />
            default: 
                return <AppRoutes />            
        }
    }

    return (
        <BrowserRouter>
            {user ? <AccessRoute /> : <AppRoutes />}
        </BrowserRouter>
    )
}

