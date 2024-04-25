import React, { useEffect } from 'react';
import styles from './action3.module.css';
import Grandmother from '@ui/MinorCharacters/Grandmother/Grandmother';
import Dialog from '@scenes/Dialog/Dialog';

const TableOfficeComponent = ({ svgRef }) => {
	useEffect(() => {}, []);

	return (
		<>
			<Dialog />
			<Grandmother svgRef={svgRef} />
			<div className={styles.overlay}></div>
		</>
	);
};

export default {
	Table: {
		component: TableOfficeComponent,
	},
};
