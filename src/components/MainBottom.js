import React, {useState, useEffect} from 'react';
// import { booksArray } from '../data/inventoryBooks';
import {db} from '../firebase/config'
import {collection, getDocs, orderBy, query} from 'firebase/firestore'


function MainBottom() {
  const [books, setBooks] = useState(null);
  const [bookData, setBookData] = useState({});


  const handleSelect = (e) => {
      const selectedBook = books.find(book => book.title === e.target.value)
      setBookData({
        price: selectedBook.price,
        tax: selectedBook.tax,
        quantity: selectedBook.quantity
      })
  }

//   .collection("books")
// .orderBy("", "asc")

  // fetch books from firestore
  useEffect(() => {
    const ref = collection(db, 'books')

  //order query
  const q = query(ref, orderBy("order", "asc")) 
    
    getDocs(q)
      .then((snapshot) => {
        let results = []
        snapshot.docs.forEach(doc => {
          results.push({id: doc.id, ...doc.data()})
        })
        setBooks(results)
      })
  }, [])

  return (
    <div className='container main-bottom border-round'>
      <div className='search-item search-item-1'>
        <div>
          <select className='book-list' onChange={handleSelect}>
              {books && books.map((book) => <option key={book.id}>{book.title}</option>)}
          </select>
        </div>
        <div><input className='dcam-input' type='text' value={bookData && bookData.price} disabled /></div>
        <div><input className='dcam-input' type='text' value={bookData.tax && bookData.tax * 100 + '%'} disabled /></div>
        <div><input className='dcam-input' type='text' value={bookData.price && (bookData.price * bookData.tax + bookData.price).toFixed(2)} disabled /></div>
        <div><input className='dcam-input' type='text' value={bookData.quantity && bookData.quantity} disabled /></div>
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
