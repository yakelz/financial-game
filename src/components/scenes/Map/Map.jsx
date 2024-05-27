import React, { useRef, useEffect, useState } from 'react';
import Background from '@ui/Background/Background';
import styles from './Map.module.css';
import GameMap from '@assets/Map/map.svg?react';
import getAction from '@core/actions/getAction';
import Pulse from '@ui/Pulse/Pulse';
import useViewStore from '@core/store/useViewStore';
import useGameStore from '@core/store/useGameStore';
import { useAudio } from '@core/audio/AudioContext';

function Map() {
	const { component: ActionComponent } = getAction('Map');
	const { setView, pulseRef } = useViewStore();
	const [showDayTransition, setShowDayTransition] = useState(false);

	const { actions, currentActionIndex, nextAction } = useGameStore();
	const currentAction = actions[currentActionIndex];

	const { playEffectSound } = useAudio();
	const homeRef = useRef(null);
	const officeRef = useRef(null);

	const getCurrentRef = () => {
		switch (pulseRef) {
			case 'home':
				return homeRef;
			case 'office':
				return officeRef;
			default:
				return null;
		}
	};

	const svgRef = useRef(null);

	const handleBankClick = () => console.log('Bank clicked');
	const handleHomeClick = () => {
		playEffectSound('./Audio/Sounds/dig_click_02.wav');
		console.log(currentActionIndex); // 4
		if (currentActionIndex === 4 || currentActionIndex === 8) {
			setShowDayTransition(true);
			setTimeout(() => {
				setShowDayTransition(false);
			}, 4000);
			nextAction(); // Должен поменять на 5
		}
		console.log(currentActionIndex); //4
		console.log('Home clicked');
	};
	const handleOfficeClick = () => {
		playEffectSound('./Audio/Sounds/dig_click_02.wav');
		console.log('Office clicked');
		setView('office');
	};

	useEffect(() => {
		const svgNode = svgRef.current;
		if (svgNode) {
			const bank = svgNode.querySelector('#bank');
			const home = svgNode.querySelector('#home');
			const office = svgNode.querySelector('#office');

			// Привязываем homeRef.current к элементу home
			homeRef.current = home;
			officeRef.current = office;

			if (bank) {
				bank.addEventListener('click', handleBankClick);
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
					bank.removeEventListener('click', handleBankClick);
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
		<>
			{showDayTransition && (
				<div className={styles.transitionOverlay}>
					<div className={styles.dayText}>День {currentAction.day}.</div>
				</div>
			)}
			{pulseRef && <Pulse targetRef={getCurrentRef()} />}
			<main>
				<ActionComponent />

				<Background>
					<GameMap ref={svgRef} />
				</Background>
			</main>
		</>
	);
}

export default Map;
