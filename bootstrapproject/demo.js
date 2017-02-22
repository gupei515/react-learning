import React from 'react';
import ReactDOM from 'react-dom';

import Form from './src/components/Form';
import {Text} from './src/components/Text'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render((
    <MuiThemeProvider>
        <Form>
            <Text name="name" placeholder="Type your name here" label="Your name"/>
        </Form>
    </MuiThemeProvider>
), document.getElementById('container'));


