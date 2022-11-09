
import { createContext, CSSProperties} from 'react';
import { InitialValues, onChangeArgs, Product, ProductContextProps, ProductCardHandlers } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css'
import { UseProduct } from '../hooks/UseProduct';
/* import { ProductButtons, ProductImage, ProductTitle } from '.'; */


export const ProductContext = createContext({} as ProductContextProps)

const { Provider } = ProductContext

export interface Props {
    product: Product;
   // children?: ReactElement | ReactElement[];
    children:(args:ProductCardHandlers) => JSX.Element;

    className?: string;
    style?: CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const ProductCard = ({ product, children, className, style, onChange, value, initialValues}: Props) => {

    const { counter, increaseBy, maxCount, isMaxCountReached, reset } = UseProduct({ onChange, product, value, initialValues })

    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
            maxCount
        }}>
            <div
                style={style} 
                className={`${styles.productCard} ${className}`}>
                {children ({
                    count: counter,
                    isMaxCountReached,
                    maxCount: initialValues?.maxCount,
                    product,
                    increaseBy,
                    reset,
                })}
            </div>
        </Provider>
    )
}



