import React from 'react';

import character from '@assets/UI/Character/character.svg';

import styles from './Character.module.css';

function Character({ onMenu }) {
	const className = onMenu ? `${styles.character} ${styles.onMenu}` : styles.character;
	return (
		<div>
			<img className={className} src={character} alt='Главный персонаж' />
		</div>
	);
}

export default Character;
