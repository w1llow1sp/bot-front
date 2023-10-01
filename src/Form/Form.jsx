import styles from './Form.module.css'
import { Slider} from "./Carousel/Carousel";
import {Buttons} from "./Buttons/Buttons";

export const Form = () => {
    return (
        <section className={styles.main}>
            <div className={'container'}>
               <div className={styles.slider}>
                   <Slider/>
               </div>
               <div className={styles.form}>
                   <Buttons/>
               </div>
            </div>
        </section>
    )
}