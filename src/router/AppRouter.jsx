import { Route, Routes } from "react-router-dom"
import { Login } from "../auth"
import { HeroeRoutes } from "../heroes/routes/HeroeRoutes"

export const AppRouter = () => {
    return (
        <>

            <Routes>

                <Route path="login" element={<Login />} />

                <Route path="/*" element={<HeroeRoutes />} />

            </Routes>
        </>
    )
}
