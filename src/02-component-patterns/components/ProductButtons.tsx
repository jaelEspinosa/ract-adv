import { CSSProperties, useCallback, useContext } from "react"
import { ProductContext } from "./ProductCard"
import styles from '../styles/styles.module.css'
import { UseProduct } from "../hooks/UseProduct";

export interface Props {
    className?: string;
    style?: CSSProperties,
    styleButtons?:CSSProperties,
    
}

export const ProductButtons = ({className, style, styleButtons}:Props)=>{

       
    
    const {increaseBy, counter, maxCount} = useContext(ProductContext)

    
   const isMaxReached =  useCallback(
      () => !!maxCount && counter === maxCount,
      
      [counter, maxCount],
    )
  

    return(
        <div
            style={style} 
            className={`${styles.buttonsContainer} ${className}`}>
        <button
            style={styleButtons}
            onClick={()=>increaseBy(-1)}
            className={styles.buttonMinus}
        > - </button>
        
        <div 
            style={styleButtons}
            className={styles.countLabel}
        > {counter} </div>
        
        <button
            disabled={isMaxReached()}
            style={styleButtons}
            onClick={()=>increaseBy(+1)}
            className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}
        > + </button>
    </div>  
    )
}