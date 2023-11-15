import Image from 'next/image';

import styles from '../styles/Instagram.module.scss';

const Instagram = ({posts}) => {

    return (
        <div className="container">
            <div className={styles.wrapper}>

                <div className={styles.title}>Instagram</div>

                <div className={styles.posts}>

                    {posts && posts.map(({media_url, media_type, id}) => {
                        if (media_type != 'IMAGE') return
                        return (
                            <div key={id} className={styles.item}>
                                <Image 
                                    className={styles.img} 
                                    src={media_url} 
                                    width={288} 
                                    height={288} 
                                    objectFit='cover'
                                    alt={`post ${id}`}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Instagram;