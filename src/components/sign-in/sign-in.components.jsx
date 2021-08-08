import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/cutom-button.component';

import {
  SignInContainer,
  TitleContainer,
  ButtonsContainer,
} from './sign-in.styles';

import { auth, signInWithGoogle } from '../../firebase/firebase.utlis';
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <SignInContainer>
        <TitleContainer>I already have an account</TitleContainer>
        <span>sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            value={this.state.email}
            handleChange={this.handleChange}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <ButtonsContainer>
            <CustomButton type='submit'> SIGN IN </CustomButton>
            <CustomButton
              type='button'
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              SIGN IN WITH GOOGLE
            </CustomButton>
          </ButtonsContainer>
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;
