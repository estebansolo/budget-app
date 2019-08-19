import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../actions/auth';

export const Header = props => (
	<header>
		<div className="content-container">
			<div className="header__content">
				<Link to="/dashboard" className="header__title">
					<h1>Budgets Manager</h1>
				</Link>
				<button className="button button--link" onClick={props.startLogout}>
					Logout
				</button>
			</div>
		</div>
	</header>
);

const mapDispatchToProps = dispatch => ({
	startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
