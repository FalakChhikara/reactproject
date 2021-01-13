// class based component

import React from 'react';
import './app.css';

class CartItems extends React.Component {

    constructor(){
        super();
        this.state = {
            price: 999,
            title: "Phone",
            qty: 1,
            imgsrc: ''
        }
    }

    // for normal fun we have use .bind(this) in onClick eventListner
    IncreaseFun = () => {
        // form-1
        this.setState({  // rerender the component with updated value
            qty: this.state.qty + 1
        });


        // form-2
        this.setState((prevstate)=>{  // rerender the component with updated value
            return {
                qty: prevstate.qty + 1
            }
        });
    } 

  render(){
      console.log("render");
      const {price, title, qty, imgsrc} = this.state;
      return (
        <div className="cart-item">
            <div className="left-block">
                <img style = {styles.image} src={imgsrc}/>
            </div>
            <div className="right-block">
                <div style={{fontSize:25}}>{title}</div>
                <div style={{color:"gray"}}>Rs. {price}</div>
                <div style={{color:"gray"}}>Qty. {qty}</div>
                <div className="cart-item-actions">
                    <img
                     alt="increase"
                     className="action-icons"
                     src="https://image.flaticon.com/icons/svg/992/992651.svg"
                     onClick={this.IncreaseFun} />
                    <img alt="decrease" className="action-icons" src="https://image.flaticon.com/icons/svg/1665/1665612.svg" />
                    <img alt="delete" className="action-icons" src="https://image.flaticon.com/icons/svg/1214/1214428.svg" />
                </div>
            </div>
        </div>
    );
    }
}

const styles = {
    image : {
        height: 110,
        width: 110,
        borderRadius: 4,
        backgroundColor: "gray"
    }
}

export default CartItems;
