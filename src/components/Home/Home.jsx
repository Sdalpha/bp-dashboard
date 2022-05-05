import React from 'react'
import "./Home.css"
import logo from "../../asset/images/logo.png"
import userimage from "../../asset/images/userimage.png"
import {RiLogoutBoxFill} from 'react-icons/ri'

function Home() {
  return (
    <div className='dashboard'>
      <div className="sidenav">

        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className="user">
            <div className="userimage">
                <img src={userimage} alt="" />
            </div>
            <p className='username'>Satyaki Karmakar</p>
        </div>
        <div className="nav-buttons">
        <button type="button" className="ctn">Support</button>
        <div className="dropdown my-2">
  <button className="ctn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Settings
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="/">Profile Details</a></li>
    <li><a className="dropdown-item" href="/">Change Password</a></li>
  </ul>
</div>
        </div>

        <div className="post">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, expedita?
        </div>
        <a href='/' className="logout">
            <RiLogoutBoxFill/>
        </a>
      </div>
      <div className="songs">Your Song</div>
      <div className="analytics">Analytics</div>
      <div className="financial">Financial</div>
    </div>
  )
}

export default Home
