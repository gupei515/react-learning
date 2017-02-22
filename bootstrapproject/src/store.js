/**
 * Created by pgu@ensofinancial.net on 2/21/17.
 */

import * as c from './constants';
import assgin from 'lodash.assign';


const initialState = {
    values: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case c.FORM_UPDATE_VALUE:
            return assign({}, state.values, {
                [action.name] : action.value
        })

        case c.FORM_RESET:
            return initialState;

        default:
            return state;
    }
}