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
                <h2>Gross sales</h2>
                <Secondgraph/>
            </div>
        </div>
        <div className="right-container">
            <div className="first-right">
                <div className='f-r_heading'>
                    <h2 id='head'>Liquidity</h2>
                    <div className='second-heading'>
                        <div className='head-items'>
                            <h2>$253k</h2>
                            <p>Total Bank Balance</p>
                            
                        </div>
                        <div className='head-items'>
                            <h2>$154k</h2>
                            <p>Working Capital</p>
                        </div>
                        
                    </div>
                </div>
                <div className='liquidity'>
                <Thirdgraph/>
                </div>
            </div>
            <div className="second-right">
                <h2>Income and expense</h2>
                <IncomeExpensesChart/>

            </div>
        </div>
        
    </div>
  )
}

export default Dashboard
