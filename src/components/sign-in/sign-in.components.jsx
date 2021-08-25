import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/cutom-button.component';
import { connect } from 'react-redux';

import {
  SignInContainer,
  TitleContainer,
  ButtonsContainer,
} from './sign-in.styles';

import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions';
import { useState } from 'react';

const SignIn = ({ emailSignInstart, googleSignInStart }) => {
  const [userInfo, setUserInfo] = useState({ email: '', password: '' });

  const { email, password } = userInfo;
  const handleSubmit = async (event) => {
    event.preventDefault();
    emailSignInstart(email, password);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <SignInContainer>
      <TitleContainer>I already have an account</TitleContainer>
      <span>sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          value={email}
          handleChange={handleChange}
          label='email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={handleChange}
          label='password'
          required
        />
        <ButtonsContainer>
          <CustomButton type='submit'> SIGN IN </CustomButton>
          <CustomButton
            type='button'
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            SIGN IN WITH GOOGLE
          </CustomButton>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInstart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
