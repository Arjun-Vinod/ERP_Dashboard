import React from 'react'
import './Dashboard.css'
import FirstGraph from '../piechart'
import Secondgraph from '../Secondgraph'
import Thirdgraph from '../Thirdgraph'
import IncomeExpensesChart from '../Forthgraph'

const Dashboard = () => {
  return (
    <div className='main-container'>
        <div className="left-container">
            <div className="first-left">
               <FirstGraph/>
            </div>
            <div className="second-left">
                <h3>Gross sales</h3>
                <Secondgraph/>
            </div>
        </div>
        <div className="right-container">
            <div className="first-right">
                <Thirdgraph/>
            </div>
            <div className="second-right">
                <h3>Income and expense</h3>
                <IncomeExpensesChart/>

            </div>
        </div>
        
    </div>
  )
}

export default Dashboard
