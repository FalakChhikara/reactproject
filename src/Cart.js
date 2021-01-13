// class based component

import React from 'react';
import CartItem from './CartItem';

// const Cart = (props)=>{
//       const {products} = props;
//       return (
//         <>
            
//             <h1>Cart</h1>
//             <div className="cart">
//                 {products.map((product)=>{
//                     return (
//                         <CartItem 
//                             product={product} 
//                             key={product.id}
//                             onIncQty = {props.onIncQty}
//                             onDecQty = {props.onDecQty}
//                             onDelQty = {props.onDelQty}
//                         />
//                     )
//                 })}
//             </div>
//         </>
//     );
    
// }


class Cart extends React.Component {

    render(){
        const {products} = this.props;
      return (
        <>
            
            <h1>Cart</h1>
            <div className="cart">
                {products.map((product)=>{
                    return (
                        <CartItem 
                            product={product} 
                            key={product.id}
                            onIncQty = {this.props.onIncQty}
                            onDecQty = {this.props.onDecQty}
                            onDelQty = {this.props.onDelQty}
                        />
                    )
                })}
            </div>
        </>
        );
    }

}

export default Cart;
