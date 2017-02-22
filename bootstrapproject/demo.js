import React from 'react';
import ReactDOM from 'react-dom';

import Form, {Text} from './src/index';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render((
    <MuiThemeProvider>
        <Form>
            <Text
                name="name"
                validate={['required']}
                placeholder="Type your name here"
                label="Your name"/>
            <Text
                name="name"
                validate={['required', 'email']}
                placeholder="Type your email here"
                label="E-mail"/>
            <Text
                name="name"
                validate={['url']}
                placeholder="Type your website url here"
                label="website"/>
        </Form>
    </MuiThemeProvider>
), document.getElementById('container'));


