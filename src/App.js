
import React, {useState} from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import MainTop from './components/MainTop'
import MainBottom from './components/MainBottom'
import Popup from './components/Popup'
import SalesLog from './components/SalesLog'

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [showSalesLog, setShowSalesLog] = useState(false);

  
  const handlePopup = (e) => {
    if(!showPopup) {
      setShowPopup(true)
    } else if(showPopup === true && e.target.className === "popup-overlay" || e.target.className === "close-popup") {
      setShowPopup(false)
      window.location.reload()
    }
  }

  const handleSalesLog = (e) => {
    if(!showSalesLog) {
      setShowSalesLog(true)
    } else if(showSalesLog === true && e.target.className === "popup-overlay" || e.target.className === "close-popup") {
      setShowSalesLog(false)
    }
  }


  return (
    <div className='p-5 wrapper'>
      <>
      <Header />
      <MainTop />
      <MainBottom />
      <Footer handlePopup={handlePopup} handleSalesLog={handleSalesLog} />
      {showPopup && <Popup handlePopup={handlePopup} />}
      {showSalesLog && <SalesLog handleSalesLog={handleSalesLog} />}
      </>
    </div>
  )
}

export default App