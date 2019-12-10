import React from 'react';
import _isEmpty from 'lodash/isEmpty';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoginForm from '../components/LoginForm.jsx';
import { fetchLoginData } from '../actions/employee';

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

class LoginPage extends React.Component {
    state = {
        email: '',
        password: '',
        errors: {},
        // isFormValid: false,
    }

    checkValidation = () => {
        const { email, password } = this.state;
        const errors = {};
        if (!validateEmail(email)) {
            errors.email = 'Enter a valid email'
        }
        if (password.length < 8) {
            errors.password = 'Password should be atleast 8 characters'
        }
        this.setState({
            errors,
            // isFormValid: _isEmpty(errors),
        });
        return _isEmpty(errors);
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleValidation = (event) => {

        const name = event.target.name;
        const { email, password } = this.state;
        const errors = {};

        if (name === 'email' && !validateEmail(email)) {
            errors.email = 'Enter a valid email'
        } else if (name === 'password' && password.length < 8) {
            errors.password = 'Password should be atleast 8 characters'
        }
        this.setState({
            errors,
            // isFormValid: _isEmpty(errors),
        }, () => console.log(this.state.errors));
    }

    handleLoginClick = () => {
        if (this.checkValidation()) {
            this.props.getLoginData({
                email: this.state.email,
                password: this.state.password,
            });
        }
    }

    componentWillReceiveProps(nextProps){
        if (!_isEmpty(nextProps.loginError)){
            alert(nextProps.loginError.message);
        }
    }

    render() {
        if (this.props.loggedIn) {
            return (
                <Redirect to='/employee-list' />
            )
        }
        return (
            <div className='login-main'>
                <LoginForm
                    email={this.state.email}
                    password={this.state.password}
                    errors={this.state.errors}
                    isFormValid={this.state.isFormValid}
                    handleInputChange={this.handleInputChange}
                    handleLoginClick={this.handleLoginClick}
                    handleValidation={this.handleValidation}
                />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    getLoginData: (data) => dispatch(fetchLoginData(data)),
})

const mapStateToProps = (state) => {
    const { loggedIn, loginError, } = state;
    return {
        loggedIn,
        loginError,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
