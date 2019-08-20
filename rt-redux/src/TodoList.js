import React, { Component } from 'react';
import store from './store'
import { connect } from 'react-redux'

class TodoList extends Component {
    render() { 
        return ( 
            <div>
                <div>
                    <input 
                        value={this.props.inputValue}
                        onChange = {this.props.inputChange}
                     />
                        <button onClick={this.props.clickBtn}>提交</button>
                    </div>
                <div>
                    {
                        this.props.list.map((item,index)=>{
                            return (<div key={index}>{item}</div>)
                        })
                    }
                </div>
            </div>
         );
    }
}
    
const stateToProps = (state)=>{
    return {
        inputValue:state.inputValue,
        list:state.list
    }
 }

 const dispatchToProps = (dispatch)=>{
     return {
        inputChange(e){
            let action = {
                type:'change_input',
                value:e.target.value
            }
            dispatch(action)
        },
        clickBtn(){
            let action = {
                type:'add_item'
            }
            dispatch(action)
        }
     }
 }

 
export default connect(stateToProps,dispatchToProps)(TodoList);