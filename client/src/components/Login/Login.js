import React from "react";
import { AmplifyAuthenticator, AmplifySignIn } from "@aws-amplify/ui-react";
import "./Login.css";
import AuthStateApp from "./authstate";

const Login = () => {
  return (
    <AmplifyAuthenticator usernameAlias="email">
      <AmplifySignIn slot="sign-in" usernameAlias="email" />
      
      {/* <AmplifySignUp
      // TODO: add username option to sign up 
        slot="sign-up"
        usernameAlias="email"
        formFields={[
          {
            type: "username",
            label: "Username *",
            placeholder: "Username...",
            required: true,
          },
          {
            type: "email",
            label: "Email *",
            placeholder: "Email...",
            required: true,
          },
          {
            type: "password",
            label: "Password *",
            placeholder: "Password...",
            required: true,
          },
          {
            type: "phone_number",
            label: "Phone Number",
            placeholder: "Phone Number...",
            required: false,
          },
        ]}
      /> */}

      <AuthStateApp />
    </AmplifyAuthenticator>
  );
};

export default Login;
