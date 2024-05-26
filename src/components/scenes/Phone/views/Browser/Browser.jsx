import React from 'react';
import styles from './Browser.module.css';
import Magnifier from '@assets/UI/Icons/magnifier.svg?react';

function Browser() {
	return (
		<div className={styles.container}>
			<main>
				<div className={styles.search}>
					<form role='search'>
						<input id='search' type='search' placeholder='Введите поисковый запрос...' required />
						<button type='submit'>
							<Magnifier />
						</button>
					</form>
				</div>
			</main>
		</div>
	);
}

export default Browser;
