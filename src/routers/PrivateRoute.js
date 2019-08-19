import React from 'react';
import Header from '../components/Header';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => {
	const drawComponent = props => {
		return isAuthenticated ? (
			<React.Fragment>
				<Header />
				<Component {...props} />
			</React.Fragment>
		) : (
			<Redirect to="/" />
		);
	};

	return <Route {...rest} component={drawComponent} />;
};

const mapStateToProps = state => ({
	isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);
