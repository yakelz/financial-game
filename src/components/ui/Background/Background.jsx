import React from 'react';
import styles from './Background.module.css';

function Background({ src }) {
	return <div className={styles.background} style={{ backgroundImage: `url(${src})` }}></div>;
}

export default Background;
