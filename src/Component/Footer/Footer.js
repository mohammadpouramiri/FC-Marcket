import React from 'react'
import "./Footer.css"
import { Container , Row , Col } from "react-bootstrap"

const Footer = () => {
    return (
        <footer className="bg-black-100">
            <Container>
                <Row>
                    <Col className="text-center">
                        footer
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
