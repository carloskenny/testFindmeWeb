import { FormEvent, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

import styles from './styles.module.scss';

export function LoginBox() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signIn } = useContext(AuthContext)

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const data = {
            email,
            password,
        }

        await signIn(data);
    }


    return (
        <form onSubmit={handleSubmit} className={styles.loginBoxWrapper}>

            <strong>LOGIN</strong>
            <input type="email" className={styles.inputText} value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" className={styles.inputText} value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
            <button type="submit" className={styles.signInButton}>ENTRAR</button>


        </form >
    )
}