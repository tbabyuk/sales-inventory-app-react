import React from 'react';

function MainBottom() {
  return (
    <div className='container main-bottom border-round'>
      <div className='search-item search-item-1'>
        <div><select>Select</select></div>
        <div><input className='dcam-input' type='text' disabled></input></div>
        <div><input className='dcam-input' type='text' disabled></input></div>
        <div><input className='dcam-input' type='text' disabled></input></div>
        <div><input className='dcam-input' type='text' disabled></input></div>
        <div><button className='button-big button-blue'>Show Info</button></div>
      </div>
      <div className='search-item search-item-2'>
        <div></div>
        <div>Subtotal</div>
        <div>Tax</div>
        <div>Total</div>
        <div>Left in Stock</div>
        <div></div>
      </div>
    </div>
  );
}

export default MainBottom;
