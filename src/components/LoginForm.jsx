import React from 'react';
// import _isEmpty from 'lodash/isEmpty';

const LoginForm = (props) => {
    return (
        <section className='login-form'>
            <h1>
                LOGIN HERE
            </h1>
            {/* <form> */}
                <div className='login-item'>
                    <label>
                        Email
                </label>
                    <input type='email' name='email' value={props.email} onChange={props.handleInputChange} placeholder='Enter Your Email' onBlur={props.handleValidation}/>
                    <span>{props.errors && props.errors.email ? props.errors.email : null}</span>
                </div>
                <div className='login-item'>
                    <label>
                        Password
                </label>
                    <input type='password' name='password' value={props.password} onChange={props.handleInputChange} placeholder='Enter Your Password' onBlur={props.handleValidation}/>
                    <span>{props.errors && props.errors.password ? props.errors.password : null}</span>
                </div>
                <button onClick={props.handleLoginClick} className='btn-custom'>
                    LOGIN
            </button>
            {/* </form> */}
        </section>
    )
}

export default LoginForm;