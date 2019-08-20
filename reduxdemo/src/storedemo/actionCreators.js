import { CHANGE_INPUT_VALUE } from './actionTypes'
import { DEL_ITEM } from './actionTypes'
import { ADD_ITEM } from './actionTypes'
import { GET_LIST } from './actionTypes'
import { GET_MY_LIST } from './actionTypes'

import axios from 'axios'

export const changeINputAction = (value)=>({
    type:CHANGE_INPUT_VALUE,
    value
})
export const delItem = (index)=>({
    type:DEL_ITEM,
    index
})
export const addItem = ()=>({
    type:ADD_ITEM
})
export const getListAction = (data)=>({
    type:GET_LIST,
    data
})

export const getTodoList = ()=>{
    return (dispatch)=>{
        axios.get('https://www.easy-mock.com/mock/5928eb3491470c0ac1fe660a/example/reactDemoApi')
        .then((res)=>{
            const data = res.data
            const action = getListAction(data)
            dispatch(action)
        })
    }
}

export const getMyListAction = ()=>({
  type:GET_MY_LIST  
})