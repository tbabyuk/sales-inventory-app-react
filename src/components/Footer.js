
import React from 'react'

function Footer({handlePopup}) {

  return (
    <div className='container footer border-round'>
        <div>Current Inventory:</div>
        <div><button className="button-big button-green" onClick={handlePopup}>Books</button></div>
        <div><button className="button-big button-green">Notebooks</button></div>
        <div><button className="button-big button-green">Other</button></div>
        <div><button className="button-big button-blue">Sales Log</button></div>
        <div><button className="button-small button-red">Reset Log</button></div>
    </div>
  )
}

export default Footer