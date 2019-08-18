import React from 'react'
import Header from './Header';
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => (
    <Route {...rest} component={(props) => {
        isAuthenticated ? (
            <React.Fragment>
                <Header />
                <Component {...props} />
            </React.Fragment>
        ) : (
            <Redirect to="/" />
        ) 
    }}/>
)

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute)