import React from 'react'
import { TiThMenu } from "react-icons/ti";
import { FaUserAlt } from "react-icons/fa";
import { IoAddCircle } from "react-icons/io5";
import './header.css'
const Header = () => {
  return (
    <div className='header'>
        <div className="first-header">
            <div className="left-f_header">
                <p>BI Report</p>
            </div>
            <div className="right-f_header">
                <ul className='right-items'>
                    <li>Day,Date</li>
                    <li><FaUserAlt /> Admin</li>
                    <li>&times;</li>
                </ul>
            </div>
        </div>
        <div className="second-header">
            <ul className='second-h_items'>
                <li className="menu-button"><TiThMenu /></li>
                <li>DB01-Financial Dashboard</li>
                <li>DB02-Profit and Loss</li>
                <li>Cash Flow</li>
                <li>DB104-Procurement</li>
                <li>More Dashboard Tabs</li>
                <li className='add-btn'><IoAddCircle /></li>
                
            </ul>
        </div>
    </div>
  )
}

export default Header
