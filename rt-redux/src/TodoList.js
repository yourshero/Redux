import React from 'react'
import { connect } from 'react-redux'

const TodoList = (props)=> { 
    let {inputValue ,inputChange ,clickBtn ,delBtn ,list} = props
        return ( 
            <div>
                <div>
                    <input 
                        value={inputValue}
                        onChange = {inputChange}
                     />
                        <button onClick={clickBtn}>提交</button>
                    </div>
                <div>
                    {
                        list.map((item,index)=>{
                            return (<div key={index} onClick={()=>{delBtn(index)}}>{item}</div>)
                        })
                    }
                </div>
            </div>
         );
    }
const stateToProps = (state)=>{
    return {
        inputValue:state.inputValue,
        list:state.list
    }
 }

 const dispatchToProps = (dispatch)=>{
     return {
        delBtn(index){
            let action = {
                type:'del_btn',
                index
            }
            dispatch(action)
        },
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