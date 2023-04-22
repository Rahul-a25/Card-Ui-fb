import React from 'react'
import './ui.css'
const User = () => {
  return (
    <div className='main'>
         <div className="img">
          <img width={200} height={200} src="https://lovehairstyles.com/wp-content/uploads/2021/02/tp-women-professional-hairstyless.jpg" alt="" />
         </div>
         <div className="content">
          <h2 style={{color:"rgb(79, 76, 76)"}}>Shivani Pandey</h2>
          <p>Lorem ipsum dolor sit amet,dolor sit amet. </p>
         </div>
         <div className="number">
          <table cellPadding={3}>
              <thead>
                <tr>
                  <td >102</td>
                  <td >103</td>
                  <td >104</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td >Posts</td>
                  <td >Followers</td>
                  <td >Following</td>
                </tr>
              </tbody>
          </table>
         </div>
         <div className="button">
          <button style={{backgroundColor:"#8e44ad"}}>Follow </button>
            <button style={{backgroundColor:"#e84393"}}>Message</button>
         </div>
    </div>
  )
}

export default User
