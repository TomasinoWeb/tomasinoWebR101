import { Routes, Route } from "react-router-dom"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import ErrorPage from "./pages/ErrorPage/ErrorPage"
import Departments from "./pages/Departments/Departments"
import R101 from "./pages/R101/R101"
import FaqPage from "./pages/faq/FaqPage"

function App() {
    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path='/departments' element={<Departments />}></Route>
                <Route path='/r101' element={<R101 />}></Route>
                <Route path='/faq' element={<FaqPage />}></Route>
                <Route path='*' element={<ErrorPage />}></Route>
            </Routes>
            <Footer />
        </div>
    )
}

export default App
