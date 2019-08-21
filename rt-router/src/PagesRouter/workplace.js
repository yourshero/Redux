import React from 'react';
import { Route , Link } from 'react-router-dom'
import Getup from './workplace/Getup'
import Money from './workplace/Money'

function Workplace(){
    return (
        <div>
            <div className="topNav">
                <ul>
                    <li>
                        <Link to ="/workplace/getup">工作1</Link>
                        <Link to ="/workplace/money">工作2</Link>
                    </li>
                </ul>
            </div>
            <div className="videoContent">
                <div>
                    <h3>职场技能</h3>
                    <Route path="/workplace/getup" component={Getup}></Route>
                    <Route path="/workplace/money" component={Money}></Route>
                </div>
            </div>
        </div>
    )
}

export default Workplace
