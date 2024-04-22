import React , { useEffect} from 'react'
import { Col , Row } from "react-bootstrap"
import Product from '../Component/product/Product'
import { useDispatch , useSelector } from "react-redux"
import { ProductListAction } from '../action/ProductAction'
 
const Home = () => {

    const dispatch = useDispatch()

    const ProductList = useSelector((state) => state.ProductList)

    const { loading , products } = ProductList

    useEffect(() => {
        dispatch(ProductListAction())
    } , [dispatch])

    
    return (
        <div>
            <h2>
                محصولات
            </h2>
            {loading ? <h2>در حال دریافت محصول</h2> : (
            <Row>
                {
                    products.map(item => (
                        <Col  sm={12} md={6} lg={4} key={item._id}>
                            <Product product={item} />
                        </Col>
                    ))
                }
            </Row>
            )}
        </div>
    )
}

export default Home