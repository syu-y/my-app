import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

/**
 * 画面別部分：TopPageコンポーネント
 */

const TopPage: React.FC = () => {

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if(user !== null) {
        console.log(user.providerData);
      };
    })
  }, []);

  return (
    <h1>TopPage</h1>
  );
}

export default TopPage;
