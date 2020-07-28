import {takeEvery, put} from 'redux-saga/effects';
import {getUsersFromStore, saveUsersToStore} from '../store/store';

function* registerAsync(action) {
  let user_list = getUsersFromStore();
  let userList = [];

  if (user_list != null && user_list !== undefined)
    userList = JSON.parse(user_list);

  let usernameExists = false;
  userList.forEach((user => user.username == action.username ? usernameExists = true : usernameExists = usernameExists));
  if (usernameExists) {
    return;
  }

  userList.push({username: action.username, password: action.password});
  saveUsersToStore(userList);

  yield put({type: 'AUTHENTICATE_ASYNC', userData: {username: action.username, password: action.password}});
}

export function* watchRegister() {
  yield takeEvery('REGISTER', registerAsync);
}
