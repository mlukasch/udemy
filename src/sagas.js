import delay from "redux-saga";
import {takeEvery, fork, call} from "redux-saga/effects";
import {ACTIONS} from "./actions";

const runnerSaga = function*() {
    yield call(() => {
        console.log("runnerSaga")
    })

};

const watcherSaga = function*() {
    yield takeEvery(ACTIONS.TEST, runnerSaga);
    yield delay(2);
    console.log("watcherSaga");
};

const saga = function*() {
    yield delay(2);
    console.log("saga");
};

const rootSaga = function*() {
    yield [fork(watcherSaga), fork(saga)]
};

export default rootSaga;