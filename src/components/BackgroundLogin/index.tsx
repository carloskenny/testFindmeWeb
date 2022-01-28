import styles from './styles.module.scss';

import Logo from '../../assets/favicon.png';


export function BackgroundLogin() {
    return (
        <div className={styles.backgroundWrapper}>


            <img src={Logo} alt='Logo PredialX' />


        </div>
    )
}