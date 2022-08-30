

import {useState, useEffect} from 'react'



function SalesLog({handleSalesLog}) {




    // retrieve any data stored in "sales_log" collection
  useEffect(() => {
    console.log("I fired")
  })

  return (
    <div className="popup-overlay" onClick={handleSalesLog}>
        <span className="close-popup">&times;</span>
        <div className="popup-inner">
            <table>
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Purchase Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        Feature coming soon...
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default SalesLog