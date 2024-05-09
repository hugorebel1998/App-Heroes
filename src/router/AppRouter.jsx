import { Route, Routes } from "react-router-dom"
import { Login } from "../auth"
import { HeroeRoutes } from "../heroes/routes/HeroeRoutes"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"

export const AppRouter = () => {
    return (
        <>

            <Routes>

                <Route path="login" element={
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                }
                />

                {/* <Route path="login" element={<Login />} /> */}

                <Route path="/*" element={
                    <PrivateRoute>
                        <HeroeRoutes />
                    </PrivateRoute>
                } />

                {/* <Route path="/*" element={<HeroeRoutes />} /> */}

            </Routes>
        </>
    )
}
