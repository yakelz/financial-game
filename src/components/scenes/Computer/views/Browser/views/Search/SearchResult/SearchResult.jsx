import React, { useEffect, useState } from 'react';
import styles from './SearchResult.module.css';
import useDialogStore from '@core/store/useDialogStore';

function SearchResult({ id, icon, title, breadcrumbs, description, innerHTML }) {
	const [showInnerHTML, setShowInnerHTML] = useState(false);
	const handleTitleClick = () => {
		setShowInnerHTML(true);
	};

	// Функционал для возврата к стандартному отображению
	const handleBackClick = () => {
		setShowInnerHTML(false);
	};
	const { toggleChoiceLock } = useDialogStore();

	useEffect(() => {
		if (showInnerHTML && id === 'phone') {
			toggleChoiceLock(8, 0);
			toggleChoiceLock(12, 0);
		}
		if (showInnerHTML && id === 'mastergrad') {
			toggleChoiceLock(8, 0);
		}
	}, [showInnerHTML]);

	if (showInnerHTML) {
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
