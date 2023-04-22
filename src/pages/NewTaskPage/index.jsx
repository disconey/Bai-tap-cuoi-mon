import React, { useEffect } from 'react'
import { searchTypeNew } from '../../redux/features/ProductCard/productCardSlice'
import ProductsCard from '../../components/ProductsCard'
import { useDispatch, useSelector } from 'react-redux'

const NewTaskPage = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.producter.product)

    useEffect(() => {
        dispatch(searchTypeNew())
        // eslint-disable-next-line
    }, [])
    return (
        <div>
            <ProductsCard productList={products} />
        </div>
    )
}
export default NewTaskPage