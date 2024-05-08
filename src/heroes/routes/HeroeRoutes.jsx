import { Navigate, Route, Routes } from "react-router-dom"
import { Dc, Heroe, Marvel, Search } from "../pages"
import { Navbar } from "../../components"
export const HeroeRoutes = () => {
    return (
        <>
            <Navbar />

            <Routes>

                <Route path="marvel" element={<Marvel />} />
                <Route path="dc" element={<Dc />} />
                <Route path="search" element={<Search />} />
                <Route path="heroe/:id" element={<Heroe />} />


                <Route path="/" element={<Navigate to="marvel" />} />

            </Routes>

        </>
    )
}
