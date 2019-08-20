import React, { Component } from 'react';
import { changeINputAction ,delItem , addItem ,getListAction ,getTodoList,getMyListAction} from './storedemo/actionCreators'
import TodoListUi from './TodoListUI'
import store from './storedemo'
import 'antd/dist/antd.css'
import axios from 'axios'



class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        this.storeChange = this.storeChange.bind(this)
        this.changeInputVal = this.changeInputVal.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        this.delItem = this.delItem.bind(this)
        store.subscribe(this.storeChange)//实时订阅
    }
    componentDidMount(){
        // *****thunk写法
        // const action = getTodoList()
        // store.dispatch(action)
        const action = getMyListAction()
        store.dispatch(action)
        console.log(action)
    }
    render() { 
        return ( 
           <TodoListUi 
                inputValue = {this.state.inputValue}
                changeInputVal = {this.changeInputVal}
                clickBtn = {this.clickBtn}
                list = {this.state.list}
                delItem = {this.delItem}
           />
         );
    }
    changeInputVal(e){
        const action = changeINputAction(e.target.value)
        store.dispatch(action);
    }
    
    delItem(index){
        const action = delItem(index)
        store.dispatch(action);
    }
    clickBtn(){
        const action = addItem()
        store.dispatch(action);
    }
    storeChange(){
        this.setState(store.getState())
    }
}
 
export default TodoList;