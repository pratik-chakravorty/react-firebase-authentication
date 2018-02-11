import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { firebase } from '../firebase';
import * as routes from '../constants/routes';


const withAuthorization = (authCondition) => (Component) => {
    class withAuthorization extends React.Component {

        componentDidMount() {
            firebase.auth.onAuthStateChanged(authUser => {
                if (!authCondition(authUser)) {
                    this.props.history.push(routes.SIGN_IN);
                }
            });
        }
        render() {
            return <Component />
        }
    }
    withAuthorization.contextTypes = {
        authUser: PropTypes.object
    };
    return withRouter(withAuthorization);
}

export default withAuthorization;