import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import promise from 'redux-promise';
import logger from 'redux-logger';
import reducers from './reducers';
import { rootEpic } from '../src/epics/author_epic';

const epicMiddleware = createEpicMiddleware();

const store = createStore(
    reducers,
    applyMiddleware(epicMiddleware, promise, logger)
);

epicMiddleware.run(rootEpic);

export default store;
