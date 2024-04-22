import React, { useEffect } from 'react'
import { Container , Row , Image , Col , ListGroup , Button } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { useDispatch , useSelector } from 'react-redux'
import { CartAction , RemoveFromCart } from "../action/CartAction"

const Cart = () => {

    const params = useParams()

    const productId = params.id

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)

    const { cartItems } = cart

    useEffect(() => {
        if(productId){
            dispatch(CartAction(productId))
        }
    } , [dispatch , productId])

    const removeFromCartH = (id) => {
        dispatch(RemoveFromCart(id))
    }

    return (
        <div className="header">
        <Container className="main">
            
            <Row>
                <Col md={8}>
                    <h2>سبد خرید :</h2>
                    {cartItems.length === 0 ? <p>سبد خرید خالی است</p> : (
                        <ListGroup variant="flush">
                            {cartItems.map(item => (
                                <ListGroup.Item key={item.id}>
                                    <Row>
                                        <Col md={2}>
                                            <Image src={item.image} alt={item.name} fluid rounded />
                                        </Col>
                                        <Col md={3}>
                                            {item.name}
                                        </Col>
                                        <Col md={2}>
                                            {item.price}
                                        </Col>
                                        <Col md={2}>
                                            <Button
                                                type="button"
                                                variant="light"
                                                onClick={() => removeFromCartH(item.id)}
                                            >
                                                <i className="fa fa-trash"></i>
                                            </Button>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    )} 
                </Col>
                <Col md={4}>
                    <ListGroup>
                        <ListGroup.Item className="text-center">
                            {cartItems.reduce((acc , item) => acc + item.price , 0)}  : مجموع
                        </ListGroup.Item>
                        <ListGroup.Item>
                                <Link to="/account" className="text-center">
                                    <button className="bg-blue-300 w-full rounded-xl py-2 text-black text-blod text-lg">
                                         پرداخت
                                    </button>
                                </Link>
                        </ListGroup.Item> 
                    </ListGroup> 
                </Col>
            </Row>
            
        </Container>
        </div>
    )
}

export default Cart