
import { createContext } from 'react';
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css'
import { UseProduct } from '../hooks/UseProduct';
/* import { ProductButtons, ProductImage, ProductTitle } from '.'; */





export const ProductContext = createContext({} as ProductContextProps)

const { Provider } = ProductContext


export const ProductCard = ({ product, children }: ProductCardProps) => {

    const { counter, increaseBy } = UseProduct()

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div className={styles.productCard}>
                {children}
            </div>
        </Provider>

    )
}

/* ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons; */

