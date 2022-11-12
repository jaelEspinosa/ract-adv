
import { Form, Formik, useField } from 'formik';
import * as Yup from 'yup'
import { MyTextInput } from '../components';

import '../styles/styles.css'

export const RegisterFormikPage = () => {
  
    return (
        <div>
            <h1>Resgister Formik Page</h1>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: '',
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .min(2, '3 caracteres o más')
                        .max(20, '20 caracteres  máximo')
                        .required('Requerido'),
                    email: Yup.string()
                        .email('email no válido')
                        .required('Requerido'),
                    password1: Yup.string()
                        .required('Requerido')
                        .min(6,'Minimo 6 Caracteres'),
                    password2: Yup.string()
                        .required('Requerido')
                        .oneOf([Yup.ref('password1')], 'Las contraseñas no coinciden')
                })}>
                    {
                        ({errors, handleReset}) => (

                            <Form>

                                <MyTextInput label="Name" name="name" placeholder='Name' type='text' />
                                <MyTextInput label="Email" name="email" placeholder='Email Address' type='text' />
                                <MyTextInput label="Password1" name="password1" placeholder='Password' type='password' />
                                <MyTextInput label="Password2" name="password2" placeholder='Repita password' type='password' />

                                <button type='submit'>Create</button>
                                <button  onClick={handleReset} type='button'>reset</button>
                            </Form>

                        )
                    }

            </Formik>
        </div>
    )
}

