import React from 'react';
import styles from './Search.module.css';

import Magnifier from '@assets/UI/Icons/magnifier.svg?react';

function Search() {
	return (
		<div className={styles.search}>
			<form role='search'>
				<input
					id='search'
					type='search'
					placeholder='Введите поисковый запрос...'
					autoFocus
					required
				/>
				<button type='submit'>
					<Magnifier />
				</button>
			</form>
		</div>
	);
}

export default Search;
