import React, {useState, useEffect} from 'react';
import { booksArray } from '../data/inventoryBooks';

function MainBottom() {

  const [book, setBook] = useState({});

  const handleChange = (e) => {
    const selectedBook = booksArray.find(bk => bk.title === e.target.value)
    setBook(selectedBook)
  }

  return (
    <div className='container main-bottom border-round'>
      <div className='search-item search-item-1'>
        <div>
          <select className='book-list' onChange={handleChange}>
              {booksArray.map((book, index) => {
              return <option key={index}>{book.title}</option>
              })}
          </select>
        </div>
        <div><input className='dcam-input' type='text' value={book.price && `$${book.price}`} disabled /></div>
        <div><input className='dcam-input' type='text' value={book.tax && book.tax * 100 + '%'} disabled /></div>
        <div><input className='dcam-input' type='text' value={book.price && `$${(book.price * book.tax + book.price).toFixed(2)}`} disabled /></div>
        <div><input className='dcam-input' type='text' value={book.quantity && `${book.quantity}`} disabled /></div>
      </div>
      <div className='search-item search-item-2'>
        <div></div>
        <div>Subtotal</div>
        <div>Tax</div>
        <div>Total</div>
        <div>Left in Stock</div>
      </div>
    </div>
  );
}

export default MainBottom;
