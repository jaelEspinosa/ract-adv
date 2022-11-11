
import { useForm } from '../hooks/useForm';

import '../styles/styles.css'



export const RegisterPage = () => {
    

    const {reset, isValidEmail, handleSubmit, onChange, email, name, password1, password2 } = useForm({
        name:'',
        email:'',
        password1:'',
        password2:'',
    })
    
    return (
        <div>
            <h1>Resgister Page</h1>

            <form noValidate onSubmit={handleSubmit}>

                <input
                    name='name'
                    placeholder='Name'
                    type="text"
                    value={name}
                    onChange={onChange}
                    className={`${name.trim().length<= 0 && 'has-error'}`}
                />
                {name.trim().length <= 0 && <span>*Este campo es obligatorio</span>}
                <input
                    name='email'
                    placeholder='Email'
                    type="email"
                    value={email}
                    onChange={onChange}
                    className={`${!isValidEmail(email)  && 'has-error'}`}
                />
                {!isValidEmail(email)  && <span>*email No válido</span>}


                <input
                    name='password1'
                    placeholder='Password'
                    type="password"
                    value={password1}
                    onChange={onChange}

                />
                {password1.trim().length <= 0 && <span>*Este campo es obligatorio</span>}
                {password1.trim().length < 6 && password1.trim().length > 0 && <span>*Mínimo 6 caracteres</span>}


                <input
                    name='password2'
                    placeholder='Reapeat Password'
                    type="password"
                    value={password2}
                    onChange={onChange}

                />
                {password2.trim().length <= 0 && <span>*Este campo es obligatorio</span>}
                {password2 !== password1 && <span>*Las contraseñas no son iguales</span>}

              <button type='submit'>Create</button>
              <button  onClick={reset} type='button'>reset</button>
            </form>
        </div>
    )
}

