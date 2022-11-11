


import { Formik, Field, Form, ErrorMessage } from 'formik';

import * as Yup from 'yup'

import '../styles/styles.css'



export const FormikComponents = () => {



    return (
        <div>
            <h1>Formik Components</h1>
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
                        .notOneOf([ 'it-jr' ], 'esta opción no está permitida')
                        .required('Requerido')
                })
                }>
                {
                    ({ errors, resetForm }) => (
                        <Form>
                            <label htmlFor="firstName">First Name</label>
                            <div className={`${errors.firstName && 'has-error'}`}></div>
                            <Field name="firstName" type="text" />
                            <ErrorMessage name='firstName' component='span' />

                            <label htmlFor="lastName">Last Name</label>
                            <div className={`${errors.lastName && 'has-error'}`}></div>
                            <Field name="lastName" type="text" />
                            <ErrorMessage name='lastName' component='span' />

                            <label htmlFor="email">email</label>
                            <div className={`${errors.email && 'has-error'}`}></div>
                            <Field name="email" type="text" />
                            <ErrorMessage name='email' component='span' />
                            <br />
                            <label htmlFor="jobType">Job Type</label>
                            <Field name='jobType' as='select'>
                                 <option value="">Pick something</option>
                                 <option value="developer">Developer</option>
                                 <option value="designer">Designer</option>
                                 <option value="it-senior">IT Senior</option>
                                 <option value="it-jr">IT Jr.</option>
                            </Field>
                            <ErrorMessage name='jobType' component='span' />

                            <br />
                            <label className={`${errors.terms && 'label-red'}`}>
                                <Field name="terms" type="checkbox" />
                                {' '} Terms and conditions 
                            </label>
                                <ErrorMessage name='terms' component='span' />


                            <button type='submit'>Create</button>
                            <button onClick={() => resetForm()} type='button'>Reset</button>
                        </Form>

                    )
                }

            </Formik>

        </div>
    )
}
