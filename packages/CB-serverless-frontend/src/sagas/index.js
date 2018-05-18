import { fork } from 'redux-saga/effects';
import attemptLoginSaga from './attemptLoginSaga';
import cartItemsFetchSaga from './cartItemsFetchSaga';
import cartItemsAddSaga from './cartItemsAddSaga';
import cartItemsDeleteSaga from './cartItemsDeleteSaga';
import cartItemUpdateQtySaga from './cartItemsUpdateQtySaga';

function* rootSaga() {
  yield fork(attemptLoginSaga);
  yield fork(cartItemsFetchSaga);
  yield fork(cartItemsAddSaga);
  yield fork(cartItemsDeleteSaga);
  yield fork(cartItemUpdateQtySaga);
}

export default rootSaga;
