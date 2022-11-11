


import { useFormik } from 'formik'
import * as Yup from 'yup'

import '../styles/styles.css'



export const FormikYupPage = () => {

    

    const { handleSubmit, errors, touched, getFieldProps } = useFormik({

        initialValues: {
            firstName:'',
            lastName:'',
            email:''
        },
        onSubmit: values =>{
            console.log(values)
        },
       validationSchema: Yup.object({
        firstName: Yup.string()
                      .max(15, 'máximo 15 caracteres')
                      .required('Requerido'),
        lastName: Yup.string()
                      .max(15, 'máximo 15 caracteres')
                      .required('Requerido'),
        email: Yup.string()
                      .email('email no válido')
                      .required('Requerido'),

       }) 
    })

    
    return (
        <div>
            <h1>Formik Yup</h1>

            <form noValidate onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    {...getFieldProps('firstName')}
                    className= {`${errors.firstName && touched.firstName && 'has-error'}`}
                />
                { errors.firstName && touched.firstName && <span>{errors.firstName}</span>}

                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    {...getFieldProps('lastName')}
                    className= {`${errors.lastName && touched.lastName && 'has-error'}`}
                    />
                    {errors.lastName && touched.lastName && <span>{errors.lastName}</span>}
                 <label htmlFor="email">email</label>
                <input 
                    type="email"
                    {...getFieldProps('email')}
                    className= {`${errors.email && touched.email && 'has-error'}`}
                    />
                    {errors.email && touched.email && <span>{errors.email}</span>}
                    

                <button type='submit'>Create</button>
            </form>

        </div>
    )
}
 