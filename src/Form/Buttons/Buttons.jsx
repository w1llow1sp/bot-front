import styles from './Buttons.module.css'
import {Button, Space} from 'antd';

export function Buttons() {
    return (
        <section className={styles.main}>
            <div className={styles.textSection}>
                <h2 className={styles.header}>Lorem Ipsum</h2>
                <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                    consequatur excepturi facere hic natus </p>
            </div>

            <div className={styles.buttonSection}>
                <Button block type="primary"  className={styles.button}>Login</Button>
                <Button block className={styles.button}>Sign Up</Button>

                <Button block type="link" className={styles.button}>Forget password?</Button>
            </div>

        </section>
    )
}