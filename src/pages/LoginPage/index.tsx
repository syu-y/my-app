import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
/**
 * 画面別部分：LoginPageコンポーネント
 */

const config = {
  apiKey: 'AIzaSyC05CZuWFS5mWdBLGmcvxVBPHGJDl7q134',
  authDomain: 'my-app-4be68.firebaseapp.com',
};

firebase.initializeApp(config);

const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/top',
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

const LoginPage: React.FC = () => {
  return (
    <div>
      <h1>LoginPage</h1>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}

export default LoginPage;
