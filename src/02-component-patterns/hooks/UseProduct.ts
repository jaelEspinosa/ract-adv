import { useState, useEffect, useRef } from 'react';
import { onChangeArgs, Product, InitialValues } from '../interfaces/interfaces';



interface useProductsArgs {
    product: Product,
    value?:number;
    onChange?: ( args: onChangeArgs ) => void;
    initialValues?:InitialValues;
}


export const UseProduct = ({ onChange, product, value = 0, initialValues }: useProductsArgs) => {
    


    const [counter, setCounter] = useState<number>(initialValues?.count || value)

    const isMounted = useRef(false)
    
      
    const increaseBy = (value : number) =>{
        
        let newValue = ( Math.max(counter + value, 0))
        
       
         if (initialValues?.maxCount) {
            newValue =  Math.min(newValue , initialValues.maxCount);        
        }
        
        setCounter ( newValue )
        onChange && onChange({count: newValue, product });

       }
    const reset = ()=>{
        setCounter(initialValues?.count || value)
    }

    useEffect(() => {
        if(!isMounted.current) return
        
        setCounter( value )
    }, [ value ])
    
    useEffect(() => {
        isMounted.current = true
        return ()=>{
            isMounted.current = false
        }
      
    }, [])
    



    return{
        counter,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,
        
        increaseBy,
        reset
        
    }
}
