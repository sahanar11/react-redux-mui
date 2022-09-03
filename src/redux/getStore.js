import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
// import rootSaga from "./sagas";

let storeInstance;

function initStore() {
  let sagaMiddleware = createSagaMiddleware();
  storeInstance = configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware) => {
    //   return getDefaultMiddleware({
    //     thunk: false,
    //   }).concat([sagaMiddleware]);
    // },
  });
  // sagaMiddleware.run(rootSaga);
  return storeInstance;
}

export default function () {
  if (storeInstance) {
    return storeInstance;
  }
  return initStore();
}
