import{CHANGE_INPUT,ADD_ITEM,DELETE_ITEM_VALUE,GET_LIST,GET_MY_LIST} from './actionTypes'
//import axios from 'axios'

export const changeInputAction = (value)=>({
    type:CHANGE_INPUT,
    value
})

export const addItemAction = ()=>({
    type:ADD_ITEM
})

export const deleteItemValueAction = (index)=>({
    type:DELETE_ITEM_VALUE,
    index
})

export const getListAction = (data)=>({
    type:GET_LIST,
    data
})

// export const getTodoList = ()=>{
//     return (dispatch)=>{
//         axios.post('http://localhost:8001/payment/hystrix/ok').then(
//             (res)=>{
//                 console.log(res)
//                 const data = res.data
//                 const action = getListAction(data)
//                 dispatch(action)
//             }
//         )
//     }
// }

export const getMyListAction = ()=>({
    type:GET_MY_LIST
    // return (dispatch)=>{
    //     axios.post('http://localhost:8001/payment/hystrix/ok').then(
    //         (res)=>{
    //             console.log(res)
    //             const data = res.data
    //             const action = getListAction(data)
    //             dispatch(action)
    //         }
    //     )
    // }
})