import styles from './App.module.scss';

import { AuthProvider } from '../contexts/AuthContext';

export function Dashboard({ }) {

    return (
        <AuthProvider>
            <main className={styles.contentWrapper}>
                <h1> Dashboard</h1>

            </main>
        </AuthProvider>


    )
}