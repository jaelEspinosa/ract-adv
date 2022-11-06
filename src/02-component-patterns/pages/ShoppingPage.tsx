
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import '../styles/custom-styles.css'



const product = {
  id: '1',
  title: 'coffe Mug - Card',
  img: './coffee-mug.png'
}

export const ShoppingPage = () => {
 
  return (
    <div >
        <h1>Shopping Store</h1>
        <hr />
        <div style = {{
          display:'flex',
          flexDirection:'row',
          flexWrap:'wrap'

        }}>


        <ProductCard 
          className= 'bg-dark'
          product = {product}>
          <ProductCard.Image className = 'custom-image'/>
          <ProductCard.Title className='color-white text-bold' title = 'Pepe'/>
          <ProductCard.Buttons className = 'custom-buttons' />
         </ProductCard>


        <ProductCard 
         className= 'bg-dark'
         product = {product}>
          <ProductImage className = 'custom-image' img = { product.img }/>
          <ProductTitle className='color-white text-bold' />
          <ProductButtons className = 'custom-buttons' /> 
        </ProductCard>
        
        <ProductCard style = {{ backgroundColor:'#70D1F8' }} product = {product}>
          <ProductImage style={{borderRadius:'50px', boxShadow:'10px 10px 10px rgba(0,0,0,0.4)' }} img = { product.img }/>
          <ProductTitle  style={{ color:'blue'}}/>
          <ProductButtons style={{
                    display:'flex',
                    justifyContent:'end',
                    borderColor:'white',
                    color:'white'
                  }}
                    styleButtons={{
                      borderColor:'white',
                      color:'blue'
                    }}
            /> 
        </ProductCard>
        
        </div>
    </div>
  )
}
