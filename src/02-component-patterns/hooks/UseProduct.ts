import { useState, useEffect } from 'react';
import { onChangeArgs, Product } from "../interfaces/interfaces"



interface useProductsArgs {
    product: Product,
    value?:number;
    onChange?: ( args: onChangeArgs ) => void;
}


export const UseProduct = ({ onChange, product, value = 0 }: useProductsArgs) => {
    
    const [counter, setCounter] = useState(value)

    

    useEffect(() => {
        setCounter(value)
    }, [value])
      
    
    const increaseBy = (value : number) =>{

    

        const newValue = ( Math.max(counter + value, 0))
        setCounter ( newValue )

        onChange && onChange({count: newValue, product });
    }
    return{
        increaseBy,
        counter
    }
}
