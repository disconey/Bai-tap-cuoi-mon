import * as Yup from 'yup';

export const productFormSchema = Yup.object({
    productTitle: Yup.string().required('Please input product title'),
    productCreator: Yup.string().required('Please input product creator'),
    productCreatedAt: Yup.string().required('Please input product createdAt'),
    productDescription: Yup.string().required('Please input product description'),
});