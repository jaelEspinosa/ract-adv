import { CSSProperties, useContext } from "react";
import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'
import { ProductContext } from "./ProductCard";


export interface Props {
    img?:string;
    className?:string;
    style?: CSSProperties;
}

export const ProductImage = ({ img, className, style } : Props) =>{

    const {product} = useContext (ProductContext)
    let imgToshow: string;
    if( img ) {
        imgToshow = img
    }else if( product.img ){
        imgToshow = product.img
    }else{
        imgToshow = noImage
    }
    return (
   <img 
        style={style}
        className={ `${styles.productImg} ${className}` } 
        src={imgToshow} alt="Product Imag"
        />
    )
}