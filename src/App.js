import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import './cart.css';

class App extends React.Component {



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

  getCount = ()=>{
    const {products} = this.state;
    let count = 0;
    products.forEach((product)=>{
      count += product.qty;
    }) 
    return count;
  }

  getTotal = ()=>{
    const {products} = this.state;
    let count = 0;
    products.forEach((product)=>{
      count += (product.qty*product.price);
    }) 
    return count;
  }

  render(){
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCount()}/>
        <Cart
          products = {products}
          onIncQty = {this.IncreaseFun}
          onDecQty = {this.DecreaseFun}
          onDelQty = {this.DeleteFun}
        />
        <div> TOTAL : {this.getTotal()}</div>
      </div>
    );
  }
  
}

export default App;
