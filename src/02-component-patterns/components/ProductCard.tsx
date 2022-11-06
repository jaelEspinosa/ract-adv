
import { createContext, CSSProperties, ReactElement } from 'react';
import { Product, ProductContextProps } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css'
import { UseProduct } from '../hooks/UseProduct';
/* import { ProductButtons, ProductImage, ProductTitle } from '.'; */





export const ProductContext = createContext({} as ProductContextProps)

const { Provider } = ProductContext



export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties;
}

export const ProductCard = ({ product, children, className, style }: Props) => {

    const { counter, increaseBy } = UseProduct()

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div
                style={style} 
                className={`${styles.productCard} ${className}`}>
                {children}
            </div>
        </Provider>

    )
}



