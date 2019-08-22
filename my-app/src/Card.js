import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'


const CreditCard = (props) =>
<div className="credit-card">

<h1 className="credit-card-title">{props.companyName}</h1>
<div className="credit-card-chip" />
<div className="credit-card-content">
   <div className="credit-card-text">
       <h2 className="credit-card-number">
       {props.cardNumber}
       </h2>
       <h2 className="credit-card-valid-thru">
           {props.validThru}
       </h2>
       <h2 className="credit-card-hold-name">
       {props.cardHolder}
       </h2>

   </div>
   <div className="credit-card-logo">
       <img src="data:image/jpeg;base64,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"/>
   </div>
</div>

</div>
// const CreditCard1 =(props)=>
// <div className="credit-card-input">
//     <div>
//     <input  type="text"/>{props.companyName}
//     </div>
    
//    <div>
//    <input  type="text"/>{props.cardNumber}
//        </div> 
//    <div>
//    <input  type="text"/>{props.validThru}
//        </div> 

//  <div>
//      <input type="text"/>{props.cardHolder}
//  </div>

//    </div>


const Card = () => <div>

<CreditCard  companyName='CREDIT CARD'
            cardNumber='7253 3256 7895 1245'
            validThru='11/50'
            cardHolder='CARDHOLDER'/>

{/* <CarditCard 
   
   
   cardNumber={input.cardNumber.value}
   companyName={input.companyName.value}
   evalidThru={input.validThru.value}
   cardHolder={input. cardHolder.value}
   focused={state.focused}

   

   
   /> */}
           

</div>
ReactDOM.render(<Card/>, document.getElementById('root'));
export default Card;