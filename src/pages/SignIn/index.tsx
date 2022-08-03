import { useState } from 'react';
import { GoogleLogo } from 'phosphor-react';
import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth';
import { auth } from '../../services/firebase';

import './styles.scss';

export function SignIn() {
  const [user, setUser] = useState<User>({} as User);

  function handleGoogleSignIn() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleGoogleSignOut() {
    setUser({} as User);
  }

  return (
    <div className='container'>
      <div className='user'>
        {user?.photoURL && <img src={user?.photoURL} alt='Avatar do usuário' />}
        <strong>{user?.displayName}</strong>
        <small>{user?.email}</small>
      </div>

      <h1>Acesse sua conta</h1>

      <span>Utilizando autenticação social com a Google</span>

      {!user?.displayName && (
        <button type='button' className='button' onClick={handleGoogleSignIn}>
          <GoogleLogo />
          Entrar com Google
        </button>
      )}

      {user?.displayName && (
        <button type='button' className='button' onClick={handleGoogleSignOut}>
          <GoogleLogo />
          Sair da conta
        </button>
      )}
    </div>
  );
}
