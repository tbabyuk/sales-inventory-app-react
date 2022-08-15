
import React, {useState} from 'react'

function MainTop() {
    const [subtotal, setSubtotal] = useState('');
    const [tax, setTax] = useState('1.05');
    const [total, setTotal] = useState('0.00');


  const handleSubtotal = (e) => {
    setSubtotal(e.target.value);
  }

  const handleTax = (e) => {
    setTax(e.target.value);
  }

  const calcTotal = (e) => {
    e.preventDefault();
    const total = (subtotal * tax).toFixed(2);
    setTotal(total);
  }


  return (
    <form className='container main-top border-round' onSubmit={calcTotal}>
            <div>Price Calculator:</div>
            <div><input className='dcam-input' type='text' onChange={handleSubtotal} value={subtotal}/></div>
            <div><select className='dcam-input' onChange={handleTax} value={tax}>
              <option value='1.05'>GST (5%)</option>
              <option value='1.13'>HST (13%)</option>
              </select></div>
            <div><input className='dcam-input' type='text' value={`$${total}`} disabled></input></div>
            <div><button className='button-big button-blue' onClick={calcTotal}>Get Total</button></div>
    </form>
  )
}

export default MainTop