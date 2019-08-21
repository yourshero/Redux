import React, { Component } from 'react';
import { Link , Redirect } from 'react-router-dom'
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[
                {
                    cid:1,
                    title:'xxx个人博客1'
                },
                {
                    cid:2,
                    title:'xxx个人博客2'
                },
                {
                    cid:3,
                    title:'xxx个人博客3'
                },
                {
                    cid:4,
                    title:'xxx个人博客4'
                }
            ]
          }
          this.props.history.push("/home/")
    }
    render() { 
        return ( 
            <div>
                {/* 标签式重定向 */}
                {/* <Redirect to="/home/" /> */}
                <h2>jspang</h2>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                                <li key={index}>
                                    <Link to={`/list/`+item.cid}>{item.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
         )
    }
}
 
export default Index;