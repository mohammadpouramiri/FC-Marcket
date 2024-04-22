import React from 'react'
import "./Header.css"
import { Container , Navbar , Nav } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

const Header = () => {
    return (
        <header>
            <Navbar className="nav-bg" variant="dark">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>
                            FC Marcket
                        </Navbar.Brand>
                    </LinkContainer>
                    <Nav>
                        <LinkContainer to="/cart">
                            <Nav.Link> 
                                <i className="fa fa-shopping-cart"></i>
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/account">
                            <Nav.Link>
                                <i className="fa fa-user"></i>
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header