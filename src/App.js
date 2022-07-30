
import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import MainTop from './components/MainTop'
import MainBottom from './components/MainBottom'

function App() {
  return (
    <div className='p-5 wrapper'>
      <>
      <Header />
      <MainTop />
      <MainBottom />
      <Footer />
      </>
    </div>
  )
}

export default App