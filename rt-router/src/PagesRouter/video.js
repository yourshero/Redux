import React from 'react';
import { Route , Link } from 'react-router-dom'
import ReactPage from './video/ReactPage'
import Vue from './video/Vue'
import Flutter from './video/Flutter'

function Video(){
    return (
        <div>
            <div className="topNav">
                <ul>
                    <li>
                        <Link to ="/video/reactpage">React教程</Link>
                        <Link to ="/video/vue">Vue教程</Link>
                        <Link to ="/video/flutter">flutter教程</Link>
                    </li>
                </ul>
            </div>
            <div className="videoContent">
                <div>
                    <h3>视频教程</h3>
                    <Route path="/video/reactpage" component={ReactPage}></Route>
                    <Route path="/video/vue" component={Vue}></Route>
                    <Route path="/video/flutter" component={Flutter}></Route>
                </div>
            </div>
        </div>
    )
}

export default Video
