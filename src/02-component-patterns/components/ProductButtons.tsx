import { CSSProperties, useContext } from "react"
import { ProductContext } from "./ProductCard"
import styles from '../styles/styles.module.css'

export interface Props {
    className?: string;
    style?: CSSProperties,
    styleButtons?:CSSProperties,
    
}

export const ProductButtons = ({className, style, styleButtons}:Props)=>{
    
    const {increaseBy, counter} = useContext(ProductContext)
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
            style={styleButtons}
            onClick={()=>increaseBy(+1)}
            className={styles.buttonAdd}
        > + </button>
    </div>  
    )
}