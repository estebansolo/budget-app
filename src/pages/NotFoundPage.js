import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => (
	<div className="box-layout">
		<div className="not-found-box">
			<h1 className="not-found-title">404</h1>
			<Link to="/dashboard" className="button">
				Dashboard
			</Link>
		</div>
	</div>
);
