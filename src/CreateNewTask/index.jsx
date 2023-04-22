import React from 'react'
import InputProduct from '../components/InputProduct'
import Button from '../components/Button'
import './CreateNewTask.scss'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { productFormSchema } from '../validations/productFormSchema'
import { useDispatch } from 'react-redux'
import { actSetProductList } from '../redux/features/ProductCard/productCardSlice'
import { makeRandomId } from '../util'
import { useNavigate } from 'react-router-dom'
import { APP_ROUTER } from '../constant/Route'
import { TASK_STATUS } from '../constant/common'

const initialFormValues = {
    productTitle: '',
    productCreator: '',
    productCreatedAt: '',
    productDescription: '',
}


const CreateNewTask = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const methods = useForm({
        defaultValues: initialFormValues,
        resolver: yupResolver(productFormSchema)
    })
    const { control, handleSubmit, formState: { errors }, reset } = methods

    const onValid = (values) => {
        const product = {
            ...values,
            id: makeRandomId(),
            status: TASK_STATUS.NEW
        }
        dispatch(actSetProductList(product))
        handleGoBackAll()
        reset(initialFormValues)
    }
    const handleGoBackAll = () => {
        navigate(`${APP_ROUTER.ALL_TASK_PAGE}`)
    }
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

                <Button label='Save' />
            </form >

        </div >
    )
}

export default CreateNewTask