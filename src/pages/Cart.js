import React from 'react';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../context/ProductProvider';

const Cart = () => {
    const {
        state: { cart, loading, error },
      } = useProducts();
    
      let content;
    
      if(loading){
        content = <p>Loading</p>
      }
      if(error){
        content = <p>something went ot wrong</p>
      }
      if(!loading && !error && cart.length === 0){
        content = <p>Nothing to show. product list is empty</p>
      }
      if(!loading && !error && cart.length){
        content =  cart.map((product, i) => (
            <ProductCard key={i} product={product}></ProductCard>
          ))
      }
    
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-4 mx-auto my-10">
         {content}
        </div>
      );
};

export default Cart;