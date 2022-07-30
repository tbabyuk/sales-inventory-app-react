
import React from 'react'

function Header() {

    const date = new Date();
    const locale = navigator.language;
    const dateFormatted = date.toLocaleDateString(locale, {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: 'numeric'
    })


  return (
    <div className='container header border-round'>
        <div className='welcome-message'>Welcome, Heather!</div>
        <div>{dateFormatted}</div>
        <div><img src="../../dcam-logo.png" alt="Da Capo Academy of Music Logo" /></div>
    </div>
  )
}

export default Header