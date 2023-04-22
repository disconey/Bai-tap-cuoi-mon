import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductsCard from '../../components/ProductsCard'
import { searchTypeDoing } from '../../redux/features/ProductCard/productCardSlice'

const DoingPage = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.producter.product)

    useEffect(() => {
        dispatch(searchTypeDoing())
        // eslint-disable-next-line
    }, [])
    return (
        <div>
            <ProductsCard productList={products} />
        </div>
    )
}

export default DoingPage