import React from 'react'
// import noteContext from '../Context/notes/noteContext'

export default function About() {

  return (
    <div className='container p-4' style={{ backgroundColor: "white", borderRadius: "8px" }}>
      <h1>About</h1>
      <p>Welcome to our notes site!
        This site helps you to write secure notes. Our site is designed with simplicity and ease of use in mind.
        </p>
        
        <p>
          Guest user : guest@123.com
          <br></br>
          password : 12345678

          </p>
          
          <p> Thank you for choosing our notes!
        </p>
    </div>
  )
}
