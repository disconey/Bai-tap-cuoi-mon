import React from 'react'
import { APP_ROUTER } from '../../constant/Route'
import { generatePath, useNavigate } from 'react-router-dom'
import './ProductCard.scss'
import Divider from '../Divider'




const ProductsCard = ({ productList }) => {
    const navigate = useNavigate();
    const renderProductList = (products) => {
        return products.map((product, index) => {
            return <div key={index} className='product-card'>
                <div>
                    <span onClick={() => handleGoEditProduct(product.id)} className='product-item'>Title:{product?.productTitle || ''}</span>
                </div>
                <div>
                    <span>Creator:{product?.productCreator || ''}</span>
                </div>
                <div className={`product-item ${product.status === "NEW" ? "product-item--green" : product.status === "DOING" ? "product-item--orange" : product.status === "DONE" ? "product-item--blue" : " "}`}>
                    Status: {product.status}
                </div>
                <Divider />
                <div>
                    <span className='product-item'>Description:{product?.productDescription || ''}</span>
                </div>
            </div>
        })
    }
    const handleGoEditProduct = (id) => {
        navigate(generatePath(APP_ROUTER.EDIT_PRODUCT, { idProduct: id }))
    }

    return (
        <div className='product-list'>
            {renderProductList(productList)}
        </div>
    )
}

export default ProductsCard