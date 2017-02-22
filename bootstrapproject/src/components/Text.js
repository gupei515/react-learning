import React, {PropTypes} from 'react';
import TextField from 'material-ui/TextField';

export default React.createClass({
	displayName: 'Text',

	propTypes: {
        name: PropTypes.string.isRequired,
        placeholder: PropTypes.string,
        label: PropTypes.label
    },

	render() {
		return (
			<div>
				<TextField
					hintText={this.props.placeholder}
					floatingLabelText={this.props.label}
				/>
			</div>
		)

	}

});

export {default as Text} from './Text.js';