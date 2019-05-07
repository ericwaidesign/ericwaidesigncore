import React from 'react';
import PropTypes from 'prop-types';

handleSubmit = (e) => {
    e.preventDefault();
}

const LoginForm = (props) => {
    return (
        <div className='login'>
            <form className='login-form' onSubmit={this.handleSubmit}>
                <div>Enter your email</div>
                <input
                    ref={(input) => { this.textInput = input }}
                    type="text"
                    onChange={this.handleChange}
                />
            </form>
        </div>
    );
}