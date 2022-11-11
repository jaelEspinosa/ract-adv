


import { Formik, Form } from 'formik';
import * as Yup from 'yup'

import '../styles/styles.css'

import { MyTextInput, MyCheckBox, MySelect } from '../components';
import { values } from '../data/values';

export const FormikAbstractation = () => {

    return (
        <div>
            <h1>Formik Abstractation</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: '',
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'máximo 15 caracteres')
                        .required('Requerido'),
                    lastName: Yup.string()
                        .max(15, 'máximo 15 caracteres')
                        .required('Requerido'),
                    email: Yup.string()
                        .email('email no válido')
                        .required('Requerido'),
                    terms: Yup.boolean()
                        .oneOf([true], 'Acepte los términos'),
                    jobType: Yup.string()
                        .notOneOf(['it-jr'], 'esta opción no está permitida')
                        .required('Requerido')
                })}>

                {
                    ({ errors, resetForm }) => (
                        <Form>
                            <MyTextInput label="Last Name" name="firstName" placeholder='First Name' type='text' />
                            <MyTextInput label="Last Name" name="lastName" placeholder='Last Name' type='text' />
                            <MyTextInput label="Email address" name="email" placeholder='Jhon@yahoo.comm' type='email' />
                            <br />
                            <MySelect label="Type Of Job" name="jobType" >
                                {values.map(value => (

                                    <option key={value.value} value={value.value}>{value.name}</option>

                                ))}
                            </MySelect>
                            <MyCheckBox label="Terms & Conditions" name="terms" />

                            <button type='submit'>Create</button>
                            <button onClick={() => resetForm()} type='button'>Reset</button>
                        </Form>

                    )
                }

            </Formik>

        </div>
    )
}
