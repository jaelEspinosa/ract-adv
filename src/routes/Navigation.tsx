import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom"
import { DynamicForm, FormikAbstractation, FormikBasicPage, FormikComponents, FormikYupPage, RegisterFormikPage, RegisterPage } from "../03-forms/pages"

import logo from '../logo.svg'



export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo" />

                    <ul>
                        <li>
                            <NavLink to='/register' className={({ isActive }) => isActive ? 'nav-active' : ''}>Register Page</NavLink>
                        </li>
                        <li>
                            <NavLink to='/formik-basic' className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik basic tutorial</NavLink>
                        </li>
                        <li>
                            <NavLink to='/formik-yup' className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Yup</NavLink>
                        </li>
                        <li>
                            <NavLink to='/formik-components' className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Components</NavLink>
                        </li>
                        <li>
                            <NavLink to='/formik-abstractation' className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Abstractation</NavLink>
                        </li>
                        <li>
                            <NavLink to='/register-formik' className={({ isActive }) => isActive ? 'nav-active' : ''}>Register Formik</NavLink>
                        </li>
                        <li>
                            <NavLink to='/dynamicForm' className={({ isActive }) => isActive ? 'nav-active' : ''}>Dynamic Forms</NavLink>
                        </li>
                        
                    </ul>
                </nav>
                <Routes>
                    <Route path='register' element={<RegisterPage />} />
                    <Route path='register-formik' element={<RegisterFormikPage />} />
                    <Route path='formik-basic' element={<FormikBasicPage />} />
                    <Route path='formik-yup' element={<FormikYupPage />} />
                    <Route path='formik-components' element={<FormikComponents />} />
                    <Route path='formik-abstractation' element={<FormikAbstractation />} />
                    <Route path='dynamicForm' element={<DynamicForm />} />
                    <Route path='home' element={<h1>Home</h1>} />
                    <Route path='/*' element={<Navigate to='/home' replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
