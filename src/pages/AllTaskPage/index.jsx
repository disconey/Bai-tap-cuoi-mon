import React, { useEffect } from 'react'
import ProductsCard from '../../components/ProductsCard'
import { useDispatch, useSelector } from 'react-redux'
import { actGetAllTask } from '../../redux/features/ProductCard/productCardSlice'

const AllTaskPage = () => {
    const products = useSelector(state => state.producter.product)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actGetAllTask())
        // eslint-disable-next-line
    }, [])
    return (
        <div>
            <ProductsCard productList={products} />
        </div>
    )
}

export default AllTaskPage