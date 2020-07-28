import {takeEvery, put} from 'redux-saga/effects';
import {getUsersFromStore} from '../store/store';

function* loginAsync(action) {
  const user_list = getUsersFromStore();
  let userList = [];

  if (user_list != null && user_list !== undefined)
    userList = JSON.parse(user_list);

  let correctUser = false;
  userList.forEach((user => user.username == action.username && user.password == action.password ? correctUser = true : correctUser = correctUser));
  if (correctUser) {
    yield put({type: 'AUTHENTICATE_ASYNC', userData: action});
  }
}

export function* watchLogin() {
  yield takeEvery('LOGIN', loginAsync);
}
