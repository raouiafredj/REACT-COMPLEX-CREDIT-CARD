import React, { Component } from 'react';

class NumberFormat extends React.Component {
    constructor() {
        super()
        this.state ={
        
           format:'xxxx xxxx xxxx xxxx',
           mask: '',
           name:'number credit card'
           

        }
    }

    inputChangedHandler(n) {
        this.setState({
          format: n.target.value
        });
      }
    render() {
        return (
            <div>
               <input type="number"
            name="NumberInput"
            placeholder=' Number Here'
            onChange={this.inputChangedHandler}
            value={this.state.format}/> 
            </div>
        );
    }
}

export default NumberFormat;