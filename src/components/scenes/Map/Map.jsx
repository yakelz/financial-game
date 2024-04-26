import React, { useRef, useEffect } from 'react';
import Background from '@ui/Background/Background';
import styles from './Map.module.css';
import GameMap from '@assets/Map/map.svg?react';

function Map() {
	const svgRef = useRef(null);

	const handlePoliceClick = () => console.log('Bank clicked');
	const handleHomeClick = () => console.log('Home clicked');
	const handleOfficeClick = () => console.log('Office clicked');

	useEffect(() => {
		const svgNode = svgRef.current;
		if (svgNode) {
			const bank = svgNode.querySelector('#bank');
			const home = svgNode.querySelector('#home');
			const office = svgNode.querySelector('#office');

			if (bank) {
				bank.addEventListener('click', handlePoliceClick);
				bank.classList.add(styles.bank);
			}
			if (home) {
				home.addEventListener('click', handleHomeClick);
				home.classList.add(styles.home);
			}
			if (office) {
				office.addEventListener('click', handleOfficeClick);
				office.classList.add(styles.office);
			}

			return () => {
				if (bank) {
					bank.removeEventListener('click', handlePoliceClick);
					bank.classList.remove(styles.bank);
				}
				if (home) {
					home.removeEventListener('click', handleHomeClick);
					home.classList.remove(styles.home);
				}
				if (office) {
					office.removeEventListener('click', handleOfficeClick);
					office.classList.remove(styles.office);
				}
			};
		}
	}, []);

	return (
		<main>
			<Background>
				<GameMap ref={svgRef} />
			</Background>
		</main>
	);
}

export default Map;
