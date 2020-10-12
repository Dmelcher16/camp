import React from 'react';
import './App.css';
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';





const AuthStateApp = () => {
    const [authState, setAuthState] = React.useState();
    const [user, setUser] = React.useState();

    React.useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            setUser(authData)
        });
    }, []);
    console.log(user)

  return authState === AuthState.SignedIn && user ? (
      <div className="App">
          <div>Hello, {user.attributes.email}</div>
          <AmplifySignOut />
      </div>
    ) : (
        <AmplifyAuthenticator />
        );
    }

export default AuthStateApp;