import { YMaps, Map } from '@pbe/react-yandex-maps';

import styles from '../../styles/Maps.module.scss'

const Maps = () => {

    return (
        <YMaps>
            <div className={styles.map}>
                <Map 
                    defaultState={{ center: [53.900851, 27.554135], zoom: 13 }} 
                    width='100%'
                    height='100%'
                />
            </div>
        </YMaps>
    );
}

export default Maps;