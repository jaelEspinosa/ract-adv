import { useState } from "react"





export const useForm = <T>(initState: T) => {

    const [formData, setFormData] = useState(initState)

   

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        console.log(formData);
    }

    const onChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        //todo: profe lo hace asi

       /*  setRegisterData(prev => ({
            ...prev,
            [e.target.name]:e.target.value
        })) */
        //Todo: yo prefiero asi

        setFormData({...formData,[e.target.name]: e.target.value})
    }

    const reset = ()=>{
       setFormData({...initState})
    }
    
    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }


    return {
        ...formData,
        //properties
          
        formData,

        //Methods
        isValidEmail,
        handleSubmit,
        onChange,
        reset

    }
}
