
import { booksArray } from '../data/inventoryBooks';


import React from 'react'

function Popup({handlePopup}) {
  return (
    <div className="popup-overlay" onClick={handlePopup}>
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
                            <tr key={index} style={{ backgroundColor: bk.quantity <= 1 ? '#f7bdbd' : bk.quantity <= 3 ? '#eae995' : '#b4f5b8'  }}>
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