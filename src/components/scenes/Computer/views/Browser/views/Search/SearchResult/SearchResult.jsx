import React, { useState } from 'react';
import styles from './SearchResult.module.css';

function SearchResult({ id, icon, title, breadcrumbs, description, innerHTML }) {
	const [showInnerHTML, setShowInnerHTML] = useState(false);
	const handleTitleClick = () => {
		setShowInnerHTML(true);
	};

	// Функционал для возврата к стандартному отображению
	const handleBackClick = () => {
		setShowInnerHTML(false);
	};

	if (showInnerHTML) {
		console.log(id);
		return (
			<div className={styles.inner}>
				<button onClick={handleBackClick}>Назад</button>
				{innerHTML}
			</div>
		);
	}

	return (
		<div className={styles.result}>
			<h3 className={styles.title} onClick={handleTitleClick}>
				<img src={icon} alt='Иконка результата поиска' className={styles.icon} />
				{title}
			</h3>
			<span className={styles.breadcrumbs}>{breadcrumbs}</span>
			<p className={styles.description}>{description}</p>
		</div>
	);
}

export default SearchResult;
