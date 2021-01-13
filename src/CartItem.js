// class based component

import React from 'react';


// class CartItem extends React.Component {

//     constructor(props){
//         super(props);
//         // this.state = {
//         //     price: 999,
//         //     title: "Phone",
//         //     qty: 1,
//         //     imgsrc: ''
//         // }
//         this.state = this.props; //props cannot be accessed so pass props in constructor arg
        
//     }
//     // for normal fun we have use .bind(this) in onClick eventListner
//     IncreaseFun = () => {
//         // form-1
//         this.setState({  // rerender the component with updated value async so pass calback
//             qty: this.state.qty + 1
//         }); // batching happens in eventHandlers so last setState of this type is called when there are many of form-1 so rerender only once
//         // but in promises and ajax calls batching doesn't happen and sync

//         // form-2
//         // this.setState((prevstate)=>{  // rerender the component with updated value async so pass calback
//         //     return {
//         //         qty: prevstate.qty + 1
//         //     }
//         // }); // batching happens in eventHandlers but all setState of this type is called when there are many of form-2 but rerender only once
//     } 

//     DecreaseFun = () => {
//         if(this.state.qty != 0)
//         {   
//             this.setState({  // rerender the component with updated value
//                 qty: this.state.qty - 1
//             });
//         }
        
//     }

//   render(){
//       const {price, title, qty, imgsrc} = this.state;
//       return (
//         <div className="cart-item">
//             <div className="left-block">
//                 <img style = {styles.image} src={imgsrc}/>
//             </div>
//             <div className="right-block">
//                 <div style={{fontSize:25}}>{title}</div>
//                 <div style={{color:"gray"}}>Rs. {price}</div>
//                 <div style={{color:"gray"}}>Qty. {qty}</div>
//                 <div className="cart-item-actions">
//                     <img
//                         alt="increase"
//                         className="action-icons"
//                         src="https://image.flaticon.com/icons/svg/992/992651.svg"
//                         onClick={this.IncreaseFun} />
//                     <img
//                         alt="decrease"
//                         className="action-icons"
//                         src="https://image.flaticon.com/icons/svg/1665/1665612.svg" 
//                         onClick={this.DecreaseFun} />
//                     <img alt="delete" className="action-icons" src="https://image.flaticon.com/icons/svg/1214/1214428.svg" />
//                 </div>
//             </div>
//         </div>
//     );
//     }
// }

const CartItem = (props) => {

  
    const {price, title, qty, imgsrc} = props.product;
    const {onIncQty, onDecQty, onDelQty} = props;
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
                    onClick={()=> onIncQty(props.product)} />
                <img
                    alt="decrease"
                    className="action-icons"
                    src="https://image.flaticon.com/icons/svg/1665/1665612.svg" 
                    onClick={()=> onDecQty(props.product)} />
                <img 
                    alt="delete" 
                    className="action-icons" 
                    src="https://image.flaticon.com/icons/svg/1214/1214428.svg" 
                    onClick={()=> onDelQty(props.product.id)} />
                
            </div>
        </div>
    </div>
);
    
}


const styles = {
    image : {
        height: 110,
        width: 110,
        borderRadius: 4,
        backgroundColor: "gray"
    }
}

export default CartItem;
