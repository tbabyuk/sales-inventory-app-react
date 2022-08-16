
import React, {useState} from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import MainTop from './components/MainTop'
import MainBottom from './components/MainBottom'
import Popup from './components/Popup'

function App() {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true)
  }

  const closePopup = (e) => {
    if(e.target.className === "popup-overlay" || e.target.className === "close-popup") {
      setShowPopup(false);
    }
  }
  return (
    <div className='p-5 wrapper'>
      <>
      <Header />
      <MainTop />
      <MainBottom />
      <Footer openPopup={openPopup} />
      {showPopup && <Popup closePopup={closePopup} />}
      </>
    </div>
  )
}

export default App