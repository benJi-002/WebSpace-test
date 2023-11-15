import Maps from "./Maps";
import Form from "./Form";

import styles from '../../styles/MapAndForm.module.scss'

const MapAndForm = () => {

    return (
        <div className={styles.wrapper}>
            <Form/>
            <Maps/>
        </div>
    );
};

export default MapAndForm;