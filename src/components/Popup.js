
import { booksArray } from '../data/inventoryBooks';


import React from 'react'

function Popup({closePopup}) {
  return (
    <div className="popup-overlay" onClick={closePopup}>
        <span className="close-popup">&times;</span>
        <div className="popup-inner">
            <table>
                <thead>
                    <tr>
                        <th>Item #</th>
                        <th>Book Title</th>
                        <th>Qty in Stock</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {booksArray.map((bk, index) => {
                        return (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{bk.title}</td>
                                <td className='qty'><span>{bk.quantity}</span><button>subtract 1</button></td>
                                <td>${bk.price}</td>
                            </tr>
                        )})}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Popup