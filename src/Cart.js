// class based component

import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {

    
    constructor () {
        super();
        this.state = {
            products: [
            {
                price: 99,
                title: 'Watch',
                qty: 1,
                img: '',
                id: 1
            },
            {
                price: 999,
                title: 'Mobile Phone',
                qty: 10,
                img: '',
                id: 2
            },
            {
                price: 999,
                title: 'Laptop',
                qty: 4,
                img: '',
                id: 3
            }
            ]
        }
        
    }
        
    IncreaseFun = (product) => {
        // console.log("Inc qty of ", product);
        const {products} = this.state;
        const index = products.indexOf(product);
        products[index].qty += 1;
        this.setState({  
            products: products
        });
    } 

    DecreaseFun = (product) => {
        // console.log("Inc qty of ", product);
        const {products} = this.state;
        const index = products.indexOf(product);
        if(products[index].qty !== 0)
        {
            products[index].qty -= 1;
            this.setState({  
                products: products
            });
        }
    } 

    DeleteFun = (id) => {
        const {products} = this.state;
        const items = products.filter((item)=> item.id != id);
        this.setState({  
            products: items
        });
    }

  render(){
      const {products} = this.state;
      return (
        <>
            <h1>Cart</h1>
            <div className="cart">
                {products.map((product)=>{
                    return (
                        <CartItem 
                            product={product} 
                            key={product.id}
                            onIncQty = {this.IncreaseFun}
                            onDecQty = {this.DecreaseFun}
                            onDelQty = {this.DeleteFun}
                        />
                    )
                })}
            </div>
        </>
    );
    }
}


export default Cart;
