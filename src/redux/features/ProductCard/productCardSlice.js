import { createSlice } from '@reduxjs/toolkit'
import { KEY_PRODUCT_LIST, TASK_STATUS } from '../../../constant/common'

const initialState = {
    product: JSON.parse(localStorage.getItem(KEY_PRODUCT_LIST)) || [],
    productDetail: {}
}

export const productCardSlice = createSlice({
    name: 'productCardSlice',
    initialState: initialState,
    reducers: {
        actSetProductList: (state, action) => {
            const _productList = [...state.product, action.payload]
            state.product = _productList;
            localStorage.setItem(KEY_PRODUCT_LIST, JSON.stringify(_productList))
        },
        actDeteleById: (state, action) => {
            const id = action.payload;
            const _productList = state.product.filter(product => product.id !== id)
            state.product = _productList;
            localStorage.setItem(KEY_PRODUCT_LIST, JSON.stringify(_productList))
        },
        actUpdateDetailProduct: (state, action) => {
            const id = action.payload;
            const _product = state.product.find(product => product.id === id)
            if (_product) {
                state.productDetail = _product
            }
        },
        actUpdateProduct: (state, action) => {
            const { id, products } = action.payload;
            const existedIndexProduct = state.product.findIndex(product => product.id === id)

            const productList = [...state.product]
            if (existedIndexProduct !== -1) {
                productList[existedIndexProduct] = {
                    ...productList[existedIndexProduct],
                    ...products
                }
                state.product = productList
                localStorage.setItem(KEY_PRODUCT_LIST, JSON.stringify(productList))
            }
        },
        actGetAllTask: (state, action) => {
            state.product = JSON.parse(localStorage.getItem(KEY_PRODUCT_LIST)) || []
        },
        searchByTitle: (state, action) => {
            if (!action.payload) {
                state.product = JSON.parse(localStorage.getItem(KEY_PRODUCT_LIST)) || []
            } else {
                state.product = state.product.filter(product =>
                    product.productTitle.toLowerCase().includes(action.payload.toLowerCase())
                );
            }
        },
        searchTypeDoing: (state, action) => {
            const data = JSON.parse(localStorage.getItem(KEY_PRODUCT_LIST)) || []
            state.product = data.filter(product => product.status === 'DOING')
        },
        searchTypeNew: (state, action) => {
            const data = JSON.parse(localStorage.getItem(KEY_PRODUCT_LIST)) || []
            state.product = data.filter(product => product.status === 'NEW')
        },
        searchTypeDone: (state, action) => {
            const data = JSON.parse(localStorage.getItem(KEY_PRODUCT_LIST)) || []
            state.product = data.filter(product => product.status === 'DONE')
        }

    }
})

export const {
    actSetProductList,
    actDeteleById,
    actUpdateProduct,
    actUpdateDetailProduct,
    searchTypeDoing,
    searchTypeNew,
    searchTypeDone,
    searchByTitle,
    actGetAllTask
} = productCardSlice.actions
export default productCardSlice.reducer;