import {legacy_createStore as createStore} from 'redux';
import { compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from '../reducers/loadPhotoReducer';

export const store = createStore(rootReducers, compose(applyMiddleware(thunk)));