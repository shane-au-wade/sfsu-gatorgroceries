import React, { Component } from 'react';
import plusButton from '../../images/plusButton.png'
import minusButton from '../../images/minusButton.png'
import './inputSpinner.css'

class InputSpinner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  }
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <div className='inputSpinner'>
          <div className='spinner-container'>
            
           
            <button onClick={this.DecreaseItem} className='remove-outline'>
            <img src={minusButton} alt='minus' className='minus-button'></img>
            </button>

            <div className='display-number'>
            { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
            </div>

            <button onClick={this.IncrementItem} className='remove-outline'>
                <img src={plusButton} alt='plus' className='plus-button'></img>
            </button>

        </div>
        
      </div>
    );
  }
}

export default InputSpinner;