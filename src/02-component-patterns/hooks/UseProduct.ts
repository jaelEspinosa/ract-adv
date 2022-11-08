import { useState, useEffect, useRef } from 'react';
import { onChangeArgs, Product } from "../interfaces/interfaces"



interface useProductsArgs {
    product: Product,
    value?:number;
    onChange?: ( args: onChangeArgs ) => void;
}


export const UseProduct = ({ onChange, product, value = 0 }: useProductsArgs) => {
    
    const [counter, setCounter] = useState(value)

    const isControlled = useRef(!!onChange)

    useEffect(() => {
        setCounter(value)
    }, [value])
      
    
    const increaseBy = (value : number) =>{

      if( isControlled.current ) {
            return onChange!({ count: value, product})
      }

        const newValue = ( Math.max(counter + value, 0))
        setCounter ( newValue )

        onChange && onChange({count: newValue, product });
    }
    return{
        increaseBy,
        counter
    }
}
