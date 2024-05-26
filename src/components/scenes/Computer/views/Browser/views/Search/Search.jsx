import React, { useState } from 'react';
import styles from './Search.module.css';

import Magnifier from '@assets/UI/Icons/magnifier.svg?react';
import { searchKeys, resultsData } from '@core/data/searchResults';
import SearchResult from './SearchResult/SearchResult';

function Search() {
	const [input, setInput] = useState('');
	const [componentToRender, setComponentToRender] = useState(null);

	const handleChange = (event) => {
		setInput(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const normalizedInput = input
			.trim()
			.toLowerCase()
			.replace(/[\s+()-]/g, ''); // Удаление возможных пробелов, скобок и тире
		const key = searchKeys[normalizedInput];

		if (key) {
			const result = resultsData[key];
			setComponentToRender(
				<SearchResult
					id={key}
					icon={result.icon}
					title={result.title}
					breadcrumbs={result.breadcrumbs}
					description={result.description}
					innerHTML={result.innerHTML}
				/>
			);
		} else {
			setComponentToRender(
				<div className={styles.notFound}>
					<h3>Ничего не найдено</h3>
					<p>Переформулируйте запрос или поищите что-нибудь ещё</p>
				</div>
			);
		}
	};

	return (
		<main className={`${styles.main} ${componentToRender ? styles.results : ''}`}>
			<div className={styles.search}>
				<form role='search' onSubmit={handleSubmit}>
					<input
						id='search'
						type='search'
						placeholder='Введите поисковый запрос...'
						required
						value={input}
						onChange={handleChange}
					/>
					<button type='submit'>
						<Magnifier />
					</button>
				</form>
				{componentToRender}
			</div>
		</main>
	);
}

export default Search;
