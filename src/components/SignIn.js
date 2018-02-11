import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from './SignUp';
import { auth } from '../firebase';
import * as routes from '../constants/routes';

const SignInPage = ({ history }) => (
    <div className="sign-in">
        <h1 className="sign-in-header">Sign In</h1>
        <SignInForm history={history} />
        <SignUpLink />
    </div>
)



const INITIAL_STATE = {
    email: '',
    password: '',
    error: null
};

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
})


class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE }
    }

    onSubmit = (event) => {
        const {
            email,
            password
        } = this.state;

        const {
            history
        } = this.props;

        auth.doSignInWithEmailAndPassword(email, password)
            .then((authUser) => {
                console.log(authUser);
                this.setState(() => ({ ...INITIAL_STATE }))
                history.push(routes.HOME);
            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            })

        event.preventDefault();
    }

    render() {
        const {
            email,
            password,
            error
        } = this.state;

        const isInvalid =
            password === '' ||
            email === '';

        return (
            <form onSubmit={this.onSubmit}>
                <input
                    value={email}
                    onChange={event => this.setState(byPropKey('email', event.target.value))}
                    type="text"
                    placeholder="Email Address"
                />
                <input
                    value={password}
                    onChange={event => this.setState(byPropKey('password', event.target.value))}
                    type="password"
                    placeholder="Password"
                />
                <button type="submit" disabled={isInvalid}>
                    Sign in
                </button>

                {error && <p>{error.message}</p>}
            </form>
        )

    }
}

export default withRouter(SignInPage);

export {
    SignInForm
}