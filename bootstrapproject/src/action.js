/**
 * Created by pgu@ensofinancial.net on 2/21/17.
 */

import * as c from './constants';

export function update(name, value) {
    return dispatch => dispatch({
       type: c.FORM_UPDATE_VALUE,
        name , value
    });
}

export function reset() {
    return dispatch => dispatch({
        type: c.FORM_RESET
    })
}

