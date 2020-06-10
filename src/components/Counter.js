import React from 'react';

const Counter = ({ count, timesClicked, onDecrement, onIncrement, onInputNumberChange, numberInputted, onInputNumber }) => {

    return (
      <div>
        <div>
          <button onClick={onDecrement}>-</button>
          <span>{count}</span>
          <button onClick={onIncrement}>+</button>
          <br />
          <h3>Times The Increment/Decrement Buttons Have Been Clicked : {timesClicked}</h3>
          <input type="text" onChange={event => onInputNumberChange(event.target.value)} value={numberInputted}/><button onClick= 
          {onInputNumber}>Change Count Number</button>
        </div>
      </div>
    );
}


export default Counter;