import React from 'react';
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import { useHistory } from "react-router-dom";


const AuthStateApp = () => {

    let history = useHistory();
    
    const [authState, setAuthState] = React.useState();
    const [user, setUser] = React.useState();
    
    React.useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            setUser(authData)
            console.log(authData)
            console.log(nextAuthState)
            switch(nextAuthState) {
                case "signedin":
                  history.push("/home")
                  break;
                case AmplifySignOut:
                  history.push("/")
                  break;
                default:
                    history.push("/")
              }
        });
    }, []);
    console.log(user)

  return authState === AuthState.SignedIn && user ? (

      <div className="App">
          <div>Hello, {user.attributes.email}</div>
          <AmplifySignOut />
      </div>
    ) 
    : (
        <AmplifyAuthenticator />
        );
    }

export default AuthStateApp;