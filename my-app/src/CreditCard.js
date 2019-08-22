import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './style.css';

class CreditCard extends React.Component {
    constructor() {
        super()
        this.state ={
          userserial: "",
           name :'',
           cardNumber:"#### #### #### ####",
          //  month: 'xx',
          //  day: 'xx',
           cardHolder:'cardHolder',
           userdate: "xx/xxxx"
          

        }
        this.numberChange = this.numberChange.bind(this);
        this.onChangedate = this.onChangedate.bind(this);
        this.nameChange = this.nameChange.bind(this);
    }

    //Name of Card 
    nameChange(n) {
      
      if (/^[a-zA-Z-]*$/.test(n.target.value)) {
        this.setState({
          name: n.target.value
        });
      }
    }
      //Card Number
      numberChange() {
       var c =document.getElementById('nbre');
      //  var v =c.value;
       var v = c.value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
        this.setState({
               cardNumber: v.replace(/\B(?=(\d{4})+(?!\d))/g, " ") 
           });
      
      
      }
        
      
       //Date
    monthChange(m) {
     
      this.setState({
       month: m.target.value
      });
    }
  
    dayChange(d) {
      if (/^[0-9]*$/ .test(d.target.value)) {
    
      this.setState({
       day: d.target.value
      });
    }
  }
    
  //date
  onChangedate () {
    var event=document.getElementById('date');
    var d=event.value;
 
   
    if (d.length < 2) {
      this.setState({
        userdate: 'xx/xx'
      });
    } else { 
      if (d.substr(0, 2) <= 12 && d.substr(2, 4) >= 19) {
        this.setState({
          userdate: d.substr(0, 2) + "/" + d.substr(2, 4)
        });
      
    
      }
    }
  }
      
        render() {
        return (
            <div>
 <div className="credit-card">
                

                <h1>Company Name</h1>
<div className="credit-card-chip" />
<div className="credit-card-content">
   <div className="credit-card-text">
       <h2 className="credit-card-number" >
      {this.state.cardNumber}
       </h2>
       {/* <h2 className="credit-card-valid-thru">
       {this.state.day} / {this.state.month}

       </h2> */}
       
       <h2 className="credit-card-hold-name">
       {this.state.cardHolder}
       </h2>
<div><h1 className="credit-card-title">{this.state.name.toUpperCase()}</h1></div>
   </div>
</div>
<div className="month">MONTH/YEAR</div>
                    <div className="day">
                      <div className="userdate1">{this.state.userdate}</div>
                    </div>
                  
<div className="credit-card-logo">
    <img src="https://cdn4.iconfinder.com/data/icons/payment-method/160/payment_method_master_card-512.png"/>
</div>



            </div>
          
            


<div className="row-credit">
      <div>
        <div className="row">
         
        <label>NAME</label>
          <input type="text"  value={this.state.username} placeholder="Please select..." id="nom" onChange={this.nameChange}/>
        
        </div>
        
       <br/> 
        <div className="row" >

        <label>NUMBER </label>
          <input type="text" id="nbre" placeholder="Please select..."  maxLength="16" onChange={this.numberChange}/>
       
        
        </div>
       <br/>
        {/* <div className="row">
          <label > DATE</label>
          
            
            <input  type="text" maxLength="2" placeholder="Please select day" onChange={this.dayChange.bind(this)}/>
            <input  type="text"  placeholder="Please select month" maxLength="2" onChange={this.monthChange.bind(this)} />
            
        </div> */}
        <div className="row">
          <label > DATE</label>
        <input type="text"   placeholder="Please select..." id="date" onChange={this.onChangedate} />
        </div>
        </div>

        
      </div>
    </div>
   

    
        );










        
    }
}

// ReactDOM.render(<CreditCard />, document.getElementById('root'));
export default CreditCard;