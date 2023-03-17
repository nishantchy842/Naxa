import { call, put, takeEvery } from 'redux-saga/effects'
import { USER_FETCH_REQUESTED,USER_FETCH_SUCCEEDED } from './action'

const fetchApi=()=>{
  return  fetch('https://admin.naxa.com.np/api/services').then(res=>res.json())
}

function* fetchUser() {
      const users = yield call(fetchApi)
      yield put({ type: USER_FETCH_SUCCEEDED, users })
 
  }

  function* mySaga() {
    yield takeEvery(USER_FETCH_REQUESTED, fetchUser)
  }

  export default mySaga