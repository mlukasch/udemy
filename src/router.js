import React from "react";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {Route} from "react-router";
import {BrowserRouter} from "react-router-dom";
import rootReducer from "./reducers";
import thunkMiddleware from "redux-thunk";
import promiseMiddleware from "redux-promise";
import createSagaMiddleware from "redux-saga";
import HomePage from "./containers/HomePage";
import rootSaga from "./sagas"

const sagaMiddleware = createSagaMiddleware();
const storeEnhancer = applyMiddleware(thunkMiddleware, promiseMiddleware, sagaMiddleware);
const store = createStore(rootReducer, storeEnhancer);
sagaMiddleware.run(rootSaga);

export default () => (
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" component={HomePage}/>
        </BrowserRouter>
    </Provider>
);