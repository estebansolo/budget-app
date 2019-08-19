import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin, startLoginAnonym }) => (
	<div className="box-layout">
		<div className="box-layout-login">
			<h1>Budgets Manager</h1>
			<p>It's time to get your expenses under control.</p>
			<div className="box-layout__boxes">
				<div className="box-layout__box">
					<p>Take information everywhere</p>
					<button onClick={startLogin} className="button">
						Google
					</button>
				</div>
				<div className="box-layout__box">
					<p>Keep information locally</p>
					<button onClick={startLoginAnonym} className="button">
						Anonymously
					</button>
				</div>
			</div>
		</div>
	</div>
);

const mapDispatchToProps = dispatch => ({
	startLogin: () => dispatch(startLogin()),
	startLoginAnonym: () => dispatch(startLogin(true))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
