
// import { booksArray } from '../data/inventoryBooks';
import {db} from '../firebase/config'
import {collection, getDocs, updateDoc, doc, increment} from 'firebase/firestore'


import {useState, useEffect} from 'react'

function Popup({handlePopup}) {
    const [books, setBooks] = useState(null)


    const handleSubtract = (id) => {

        // now, let's try updating the quantity property
        const docRef = doc(db, 'books', `${id}`)
        updateDoc(docRef, {
            quantity: increment(-1)
        })
        .then(() => {
            console.log('quantity incremented')
        })

        
    }


    useEffect(() => {
        const ref = collection(db, 'books')
        getDocs(ref)
          .then((snapshot) => {
            let results = []
            snapshot.docs.forEach(doc => {
              results.push({id: doc.id, ...doc.data()})
            })
            setBooks(results)
          })
      }, [])


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
                    {books && books.map((bk) => {
                        return (
                            <tr key={bk.id} style={{ backgroundColor: bk.quantity <= 1 ? '#f7bdbd' : bk.quantity <= 3 ? '#eae995' : '#b4f5b8'  }}>
                                <td>{bk.id}</td>
                                <td>{bk.title}</td>
                                <td className='qty'><span>{bk.quantity}</span><button onClick={() => handleSubtract(bk.id)}>subtract 1</button></td>
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