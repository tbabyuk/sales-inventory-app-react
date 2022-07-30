
import React from 'react'

function MainTop() {
  return (
    <div className='container main-top border-round'>
            <div>Calculate Total Price:</div>
            <div><input className='dcam-input' type='text'></input></div>
            <div><select className='dcam-input'>
              <option value='GST'>GST (5%)</option>
              <option value='HST'>HST (13%)</option>
              </select></div>
            <div><input className='dcam-input' type='text' disabled></input></div>
            <div><button className='button-big button-blue'>Get Total</button></div>
    </div>
  )
}

export default MainTop