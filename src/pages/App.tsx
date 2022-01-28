import styles from './App.module.scss';
import { BackgroundLogin } from '../components/BackgroundLogin';
import { LoginBox } from '../components/LoginBox';

import { AuthProvider } from '../contexts/AuthContext';

export function App({ }) {

  return (
    <AuthProvider>
      <main className={styles.contentWrapper}>
        <BackgroundLogin />
        <LoginBox />

      </main>

    </AuthProvider>


  )
}