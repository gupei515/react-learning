/**
 * Created by pgu@ensofinancial.net on 2/22/17.
 */
import vaidUrl from 'valid-url'
import emailValidator from 'email-validator'

export function required(value) {
    return !value  ? ['this field cannot be empty'] : [];
}

export function url(value) {
    return value && !validUrl.isWebUrl(value) ? ['This URL is invalid'] : [];
}

export function email(value){
    return emailValidator.validate(value) ? ['This email address is invalid'] : [];
}

