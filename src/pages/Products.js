import React , { useEffect } from 'react'
import { Link , useParams , useNavigate } from 'react-router-dom'
import { Row , Col , Image , ListGroup , Button } from 'react-bootstrap'
import { useDispatch , useSelector } from "react-redux"
import { ProductDetailAction } from "../action/ProductAction"

const Products = () => {

    const navigate = useNavigate ()

    const params = useParams()

    const dispatch = useDispatch()

    const ProductDetail = useSelector(state => state.ProductDetail)

    const { loading , product } = ProductDetail

    useEffect(() => {
        dispatch(ProductDetailAction(params.id))
    } , [dispatch , params.id])

    const AddToCart = () => {
        navigate(`/cart/${params.id}`)
    }

    return (
        <div>
                <Link className="btn btn-light my-3" to="/">
                       بازگشت به صفحه اصلی
                </Link>
                { loading ? <h2>در حال دریافت محصول ...</h2> : (
            <Row>
                <Col md={6}>
                    <Image src={product.image} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item as="h3">
                            {product.name}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            {product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Button className="btn btn-block" onClick={AddToCart}>
                                افزودن به سبد خرید
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
                )}
        </div>
    )
}

export default Products