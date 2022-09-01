

import {useState, useEffect} from 'react'

// firebase imports
import {db} from '../firebase/config'
import {collection, getDocs} from 'firebase/firestore'



function SalesLog({handleSalesLog}) {
    const [salesLog, setSalesLog] = useState([]);


    // retrieve any data stored in "sales" collection
  useEffect(() => {
    const ref = collection(db, 'sales')
    // const q = query(ref, orderBy("order", "asc"))
    getDocs(ref)
      .then((snapshot) => {
        let results = []
        snapshot.docs.forEach(doc => {
          results.push({id: doc.id, ...doc.data()})
        })
        setSalesLog(results)
      })
  }, [])


  return (
    <div className="popup-overlay" onClick={handleSalesLog}>
        <span className="close-popup">&times;</span>
        <div className="popup-inner">
            <table>
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Total Price</th>
                        <th>Purchase Date</th>
                    </tr>
                </thead>
                <tbody>
                        {salesLog && salesLog.map(item => (
                            <tr key={item.id} style={{ backgroundColor: '#b4f5b8' }}>
                                <td>{item.title}</td>
                                <td>${item.total}</td>
                                <td>{item.time}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default SalesLog