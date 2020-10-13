import React from 'react';
import { AmplifyAuthenticator, AmplifySignIn } from '@aws-amplify/ui-react';
import './Login.css';
import AuthStateApp from './authstate';

const Login = () => {
  return (
    <AmplifyAuthenticator usernameAlias="email">
      <AmplifySignIn slot="sign-in" usernameAlias="email" 
      />
      <AuthStateApp />
    </AmplifyAuthenticator>
  );
};

export default Login;
