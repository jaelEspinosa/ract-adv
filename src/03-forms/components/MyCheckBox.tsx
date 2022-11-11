import { ErrorMessage, useField } from "formik"

interface Props{
    label: string;
    name: string;
    
    [x:string]: any

}

export const MyCheckBox = ({label,...props }: Props) => {

   const [field, meta] = useField(props)
  

  return (

      <>
          <label  className={`${meta.touched && meta.error && 'label-red'}`}>
             <input type="checkbox" {...field} {...props}/>
          { label }
          </label>
          
          <ErrorMessage name={props.name} component="span"/>
      </>
    )
    
}
