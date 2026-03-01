import { Route, Routes } from "react-router-dom"
import NavBar from "../components/NavBar"
import App from "../App"
import SearchPage from "../pages/SearchPage"

function AppRouter(){
    return(
        <>
        <NavBar/>

        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/search" element={<SearchPage/>}/>
        </Routes>
        </>
    )
}

export default AppRouter