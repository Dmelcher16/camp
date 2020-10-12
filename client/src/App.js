import React from 'react';
import { AmplifyAuthenticator, AmplifySignIn } from '@aws-amplify/ui-react';
import './App.css';
import AuthStateApp from './authstate';

const App = () => {
  return (
    <AmplifyAuthenticator usernameAlias="email">
      <AmplifySignIn slot="sign-in" usernameAlias="email" 
      />
      <AuthStateApp />
    </AmplifyAuthenticator>
  );
};

export default App;