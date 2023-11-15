import styles from '../styles/Footer.module.scss'

const Footer = () => {

    return (
        <footer>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.name}>
                        <h5 className={styles.title}>Выполнил</h5>
                        <h5 className={styles.subtitle}>Вениамин Ламеко</h5>
                    </div>

                    <div className={styles.phone}>
                        <h5 className={styles.title}>Телефон</h5>
                        <a className={styles.subtitle} href='tel:+375333253578'>+375 (33) 325-35-78</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer