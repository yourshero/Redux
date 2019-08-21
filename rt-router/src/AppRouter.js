import React from 'react';
import { BrowserRouter as Router , Route , Link } from 'react-router-dom'
import Index from './Pages/Index'
import List from './Pages/List'
import Home from './Pages/Home'
    // 传值步骤
    // 1.设置规则
    // 2.传递值
    // 3.接受值
    // 4.显示内容

function AppRouter(){
    return (
        <Router>
            <ul>
                <li>
                    <Link to='/'>首页</Link>
                </li>
                <li>
                    <Link to='/list/'>列表</Link>
                </li>
                <Route path='/' exact component = {Index}></Route>
                <Route path='/list/:cid' component = {List}></Route>
                <Route path='/home/' component = {Home}></Route>
            </ul>
        </Router>
    )
}

export default AppRouter

