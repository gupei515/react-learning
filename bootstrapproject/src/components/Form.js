import React, {PropTypes} from 'react';

export default React.createClass({
	displayName: 'Form',

	propTypes: {
		children: PropTypes.node,
		values: PropTypes.object,
		update: PropTypes.func,
		reset: PropTypes.func,
		onSubmit: PropTypes.func
	},

	childContextTypes: {
		update: PropTypes.func,
		reset: PropTypes.func,
		submit: PropTypes.func,
		values: PropTypes.object
	},

    getChildContext() {
		return {
			update: this.props.update,
			reset: this.props.reset,
			submit: this.submit,
			values: {}  /* this one may come with initalState for the store, keep this in mind */
		};
	},


	render() {
		return (
			<form>
				{this.props.children}
			</form>
		);
	}


}); 

