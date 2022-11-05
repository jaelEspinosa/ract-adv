import { useContext } from "react";
import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'
import { ProductContext } from "./ProductCard";

export const ProductImage = ({ img = '' }) =>{

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
   <img className={ styles.productImg } src={imgToshow} alt="Product Imag"/>
    )
}