import React, { Component } from 'react';
import plusButton from '../../images/plusButton.png'
import minusButton from '../../images/minusButton.png'
import './inputSpinner.css'

class InputSpinner extends Component {
  constructor(props) {
    super(props);
    this.state = {
        item: props.item,
        maxQty: props.maxQty, 
        clicks: 0,
        show: true
    };
  }

  IncrementItem = () => {
    if(this.state.clicks == this.state.maxQty){
      alert('Cannot Choose More than ' + this.state.maxQty);
    }else{
      this.setState({ clicks: this.state.clicks + 1 });
    }
    
  }
  DecreaseItem = () => {
    if(this.state.clicks == 0){
      alert('Cannot Choose Less than 0');
    }else{
      this.setState({ clicks: this.state.clicks - 1 });
    }
    
  }
  

  render() {
    return (
        
      <div className='inputSpinner'>
          

          <div className='spinner-container'>

            <div className='item-display'>
            {this.state.show ? <h3>{this.state.item}</h3> : ''}
            </div>
           
            <button onClick={this.DecreaseItem} className='remove-outline'>
            <img src={minusButton} alt='minus' className='minus-button'></img>
            </button>

            <div className='display-number'>
            { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
            </div>

            <button onClick={this.IncrementItem} className='remove-outline'>
                <img src={plusButton} alt='plus' className='plus-button'></img>
            </button>

            <div className='max-qty-display'>
            {this.state.show ? <h4>Max: {this.state.maxQty}</h4> : ''}
            </div>

            

        </div>

        
        
      </div>
    );
  }
}

export default InputSpinner;