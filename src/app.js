import React from 'react'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import { Container } from "react-bootstrap"
import Home from "./pages/Home"
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Account from './pages/Account'

const App = () => {
    return (
        <BrowserRouter>
            <Header />
                <main className="py-3">
                    <Container>
                           <Routes>
                                <Route path="/" element={<Home />} />   
                                <Route path="//products/:id" element={<Products />} />
                                <Route path="/cart/:id?" element={<Cart />} />
                                <Route path="/account" element={<Account />} />
                            </Routes> 
                    </Container>
                </main>
            <Footer />
        </BrowserRouter>
    )
}

export default App