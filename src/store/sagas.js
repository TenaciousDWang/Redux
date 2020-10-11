import { takeEvery, put } from 'redux-saga/effects'
import { GET_MY_LIST } from './actionTypes'
import { getListAction } from './actionCreateors'
import axios from 'axios'

//generator
function* mySaga() {
    yield takeEvery(GET_MY_LIST, getList)
}

function* getList() {
    // axios.post('http://localhost:8001/payment/hystrix/ok')
    // .then((res) => {
    //         console.log(res)
    //         const data = res.data
    //         const action = getListAction(data)
    //         put(action)
    //     }
    // )
    const res = yield axios.post('http://localhost:8001/payment/hystrix/ok')
    const action = getListAction(res.data)
    yield put(action)
}

export default mySaga