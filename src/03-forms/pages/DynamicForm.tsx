import { Form, Formik } from 'formik'
import { MyCheckBox, MySelect, MyTextInput } from '../components';
import formJson from '../data/custom-form.json'
import * as Yup from 'yup'

export const DynamicForm = () => {

  const initialValues: { [key: string]: any } = {}

  const requiredfields: { [key: string]: any } = {}

  for (const input of formJson) {

    initialValues[input.name] = input.value

    
    if( !input.validations ) continue;

    let schema= Yup.string()

       for (const rule  of input.validations) {
         
         if(rule.type === 'required'){

          schema = schema.required('Campo obligatorio')
         }
         if (rule.type === 'required' && input.type === 'checkbox'){
          
          schema = schema.required(' Check requerido')
         }
         if(rule.type === 'minLength') {

          schema = schema.min((rule as any).value || 2 , `minimo ${(rule as any).value || 2} caracteres`)
         }
         if(rule.type === 'maxLenght') {

          schema = schema.max((rule as any).value || 25 , `máximo ${(rule as any).value || 25} caracteres`)
         }
         if(rule.type === 'email') {
          schema = schema.email('Email no válido')
         }
         // otras reglas
       }
    requiredfields[input.name] = schema
  }


const validationSchema = Yup.object({...requiredfields})
  return (
    <div>

      <h1>DynamicForm</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);

        }}
        validationSchema={validationSchema}
      >
        {({ handleReset }) => (
          <Form noValidate>

            {formJson.map(({ label, name, placeholder, type, options }) => {
              if (type === 'input' || type === 'email' || type === 'password') {
                
                return <MyTextInput
                  key={name}
                  label={label}
                  name={name}
                  type={type as any}
                  placeholder={placeholder} />

              } else if (type === 'select') {
                
                return <MySelect key={name} label={label} name={name} >
                
                  <option value="">Select an option</option>
                  {options!.map(({ id, label }) => (
                    <option key={id} value={id}>{label}</option>
                  ))}

                </MySelect>
              } else if (type === 'checkbox'){
                return (
                  <div key={name}>
                    <br />
                    <MyCheckBox  label={label} name={name} />
                  </div>
                )
              }

            })}

            <button type='submit'>Create</button>
            <button onClick={handleReset} type='button'>Reset</button>

          </Form>
        )}
      </Formik>

    </div>
  )
}
