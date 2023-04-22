import React, { useEffect } from 'react'
import './DetailTask.scss'
import { useDispatch, useSelector } from 'react-redux'
import { actDeteleById, actUpdateDetailProduct, actUpdateProduct } from '../../redux/features/ProductCard/productCardSlice'
import InputProduct from '../InputProduct'
import Button from '../Button'
import { useForm } from 'react-hook-form'
import { productFormSchema } from '../../validations/productFormSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate, useParams } from 'react-router-dom'
import { APP_ROUTER } from '../../constant/Route'
import Radio from '../Radio'
import { TASK_STATUS } from '../../constant/common'

const initialFormValues = {
    productTitle: '',
    productCreator: '',
    productCreatedAt: '',
    productDescription: '',
    status: TASK_STATUS.NEW
}


const DetailTask = () => {
    const { idProduct } = useParams()
    const navigate = useNavigate()
    const productDetail = useSelector(state => state.producter.productDetail)
    const dispatch = useDispatch()
    const handleDeleteById = () => {
        dispatch(actDeteleById(idProduct))
        handleGoBackAll()
    }
    const handleGoBackAll = () => {
        navigate(`${APP_ROUTER.ALL_TASK_PAGE}`)
    }
    const methods = useForm({
        defaultValues: initialFormValues,
        resolver: yupResolver(productFormSchema)
    })
    const { control, handleSubmit, formState: { errors }, reset } = methods

    const onValid = (values) => {


        dispatch(actUpdateProduct({ id: idProduct, products: values, }))
        handleGoBackAll()
        reset(initialFormValues)
    }
    useEffect(() => {
        if (idProduct) {
            dispatch(actUpdateDetailProduct(idProduct))
        }
    }, [idProduct, dispatch])

    useEffect(() => {
        reset(productDetail)
    }, [productDetail, reset])





    return (
        <div className='create-new-task'>
            <form onSubmit={handleSubmit(onValid)}>
                <div>
                    <InputProduct
                        customClass='form-item'
                        label='Title'
                        placeholder='Place holder'
                        name='productTitle'
                        control={control}
                        errors={errors}
                    />
                    {!!errors.productTitle && <p style={{ color: 'red', fontSize: 12, textAlign: 'center' }}>{errors.productTitle?.message}</p>}
                </div>
                <div>
                    <InputProduct
                        customClass='form-item'
                        label='Creator'
                        placeholder='Name of Creator'
                        name='productCreator'
                        control={control}
                        errors={errors}
                    />
                    {!!errors.productCreator && <p style={{ color: 'red', fontSize: 12, textAlign: 'center' }}>{errors.productCreator?.message}</p>}
                </div>
                <div>
                    <InputProduct
                        customClass='form-item'
                        label='CreatedAt'
                        name='productCreatedAt'
                        control={control}
                        errors={errors}
                    />
                    {!!errors.productCreatedAt && <p style={{ color: 'red', fontSize: 12, textAlign: 'center' }}>{errors.productCreatedAt?.message}</p>}
                </div>
                <div>
                    <InputProduct
                        customClass='form-item'
                        label='Desciption'
                        placeholder='Description Detail'
                        name='productDescription'
                        control={control}
                        errors={errors}
                    />
                    {!!errors.productDescription && <p style={{ color: 'red', fontSize: 12, textAlign: 'center' }}>{errors.productDescription?.message}</p>}
                </div>
                <div>
                    <Radio
                        name='status'
                        control={control} />
                </div>

                <Button label='Save' />
            </form >
            <div className='btn-2'>
                <Button label='Reset' />
                <Button label='Delete' onClick={handleDeleteById} />
            </div>
        </div >
    )
}

export default DetailTask