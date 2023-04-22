import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchTypeDone } from '../../redux/features/ProductCard/productCardSlice'
import ProductsCard from '../../components/ProductsCard'

const DonePage = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.producter.product)

    useEffect(() => {
        dispatch(searchTypeDone())
        // eslint-disable-next-line
    }, [])
    return (
        <div>
            <ProductsCard productList={products} />
        </div>
    )
}

export default DonePage