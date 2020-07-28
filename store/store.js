import SyncStorage from 'sync-storage';

export async function initStorage(){
  await SyncStorage.init();
  console.log('AsyncStorage is ready!');
}

export function getUsersFromStore() {
  return SyncStorage.get('user_list');
}

export function saveUsersToStore(userList) {
  SyncStorage.set('user_list', JSON.stringify(userList));
}
