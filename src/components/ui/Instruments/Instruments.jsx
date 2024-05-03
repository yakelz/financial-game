import React, { useRef, useEffect, useState } from 'react';
import Phone from './Phone';
import Calendar from './Calendar';
import Map from './Map';
import useViewStore from '@core/store/useViewStore';
import Pulse from '@ui/Pulse/Pulse';
import styles from './Instruments.module.css';
import RightArrow from '@assets/UI/Icons/right_arrow.svg?react';
import LeftArrow from '@assets/UI/Icons/left_arrow.svg?react';

function Instruments({ isActive, setActive }) {
	const toggleActive = () => setActive(!isActive);
	const { pulseRef } = useViewStore();
	const mapRef = useRef(null);
	const openButtonRef = useRef(null);
	const [pulseTarget, setPulseTarget] = useState(null);

	useEffect(() => {
		if (pulseRef === 'map') {
			if (!isActive) {
				const timer = setTimeout(() => {
					setPulseTarget(openButtonRef);
				}, 500);
				return () => clearTimeout(timer);
			} else if (isActive) {
				const timer = setTimeout(() => {
					setPulseTarget(mapRef);
				}, 500);
				return () => clearTimeout(timer);
			}
		} else {
			setPulseTarget(null);
		}
	}, [isActive, pulseRef]);

	return (
		<>
			{pulseTarget && <Pulse targetRef={pulseTarget} animate={true} />}
			<div className={`${styles.instruments} ${isActive ? styles.active : ''}`}>
				<ul>
					<li>
						<Phone />
					</li>
					<li>
						<Calendar />
					</li>
					<li ref={mapRef} className={styles.map}>
						<Map />
					</li>
				</ul>
				<button ref={openButtonRef} onClick={toggleActive}>
					{isActive ? <LeftArrow /> : <RightArrow />}
				</button>
			</div>
		</>
	);
}

export default Instruments;
