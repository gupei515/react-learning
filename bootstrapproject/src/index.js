/**
 * Created by pgu@ensofinancial.net on 2/21/17.
 */

import React, {PropTypes} from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import Form from  './components/Form';
import * as actions from './action';
import store from './store';
/*
import injectTapEventPlugin  from 'react-tap-event-plugin';


injectTapEventPlugin();
*/

const SmartForm = connect(state => state, actions)(Form);

const reduxMiddleware = applyMiddleware(thunk, createLogger());

export default props  => (
    <Provider store={compose(reduxMiddleware)(createStore)(store)}>
        <SmartForm {...props}/>
    </Provider>
);


export {default as Text} from './components/Text';