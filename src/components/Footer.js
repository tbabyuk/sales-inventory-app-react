
import React from 'react'

function Footer({handlePopup}) {

  const handleNotebooks = () => {
    alert("No notebooks for sale at this time!")
  }

  const handleOther = () => {
    alert("No other products for sale at this time!")
  }

  return (
    <div className='container footer border-round'>
        <div>Current Inventory:</div>
        <div><button className="button-big button-green" onClick={handlePopup}>Books</button></div>
        <div><button className="button-big button-green" onClick={handleNotebooks}>Notebooks</button></div>
        <div><button className="button-big button-green" onClick={handleOther}>Other</button></div>
        <div><button className="button-big button-blue">Sales Log</button></div>
        <div><button className="button-small button-red">Reset Log</button></div>
    </div>
  )
}

export default Footer