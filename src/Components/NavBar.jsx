import { Route, Routes } from "react-router-dom"
import { Your } from "../pages/Your"
import { All } from "../pages/All"
import { Blocked } from "../pages/Blocked"
import { HomePage } from "../pages/HomePage"
import { ErrorPage } from "../pages/ErrorPage"

export const NavBar = () => {
    return (
        <>
            <Routes>
                <Route
                    path='/'
                    element={<HomePage/>}
                />
                <Route
                    path='/your'
                    element={<Your/>}
                />
                <Route
                    path='/all/*'
                    element={<All/>}
                />
                <Route
                    path='/blocked'
                    element={<Blocked/>}
                />
                <Route
                    path='*'
                    element={<ErrorPage/>}
                />
            </Routes>
        </>
    )
}