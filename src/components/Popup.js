
// import { booksArray } from '../data/inventoryBooks';
import {db} from '../firebase/config'
import {collection, addDoc, getDocs, updateDoc, doc, increment, query, orderBy, serverTimestamp} from 'firebase/firestore'


import {useState, useEffect} from 'react'



function Popup({handlePopup}) {
    const [books, setBooks] = useState(null)


    const addToLog = async id => {

        const docRef = collection(db, 'sales')
        console.log(id)
        const targetBk = books.find(bk => bk.id === id)
        const targetTitle = targetBk.title
        const targetTotal = ((targetBk.price * targetBk.tax) + targetBk.price).toFixed(2)

        const loc = navigator.language;

        console.log(loc)
    
        await addDoc(docRef, {
            title: targetTitle,
            total: targetTotal,
            time: new Date().toLocaleString('en-US')
            })

    }

    const handleSubtract = (id) => {

        // now, update the quantity of this document
        const docRef = doc(db, 'books', `${id}`)
        console.log(docRef)
        updateDoc(docRef, {
            quantity: increment(-1)
        })
        .then(() => addToLog(id))
        
        
        // Later, add this document to the Sales Log collection

        // .then(() => {
        //     saveToSalesLog(docRef)
        // })

    }


    useEffect(() => {
        const ref = collection(db, 'books')
        const q = query(ref, orderBy("order", "asc"))
        getDocs(q)
          .then((snapshot) => {
            let results = []
            snapshot.docs.forEach(doc => {
              results.push({id: doc.id, ...doc.data()})
            })
            setBooks(results)
          })
      }, [handleSubtract])


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
                        <th>Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    {books && books.map((bk, index) => {
                        return (
                            <tr key={index} style={{ backgroundColor: bk.quantity <= 1 ? '#f7bdbd' : bk.quantity <= 3 ? '#eae995' : '#b4f5b8' }}>
                                <td>{bk.id}</td>
                                <td>{bk.title}</td>
                                <td className='qty'><span>{bk.quantity}</span><button onClick={() => handleSubtract(bk.id)}>subtract 1</button></td>
                                <td>${((bk.price * bk.tax) + bk.price).toFixed(2)}</td>
                            </tr>
                        )})}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Popup