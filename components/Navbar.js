import Link from 'next/link';
import styles from '../styles/Navbar.module.scss';


const Navbar = () => {

    return (
        <nav className={styles.nav}>
            <div className={styles.linkWrapper}>
                    <Link 
                        legacyBehavior
                        href='/' 
                    >
                        <a className={styles.link}>LOGO</a>
                    </Link>
                ))}                
            </div>
        </nav>
    );
};

export default Navbar;