import React, { useEffect } from 'react';
import useViewStore from '@core/store/useViewStore';
import getAction from '@core/actions/getAction';

import Office from '@scenes/Office/Office';
import Computer from '@scenes/Computer/Computer';
import Colleague from '@scenes/Colleague/Colleague';
import Map from '@scenes/Map/Map';
import PhoneScreen from '@scenes/Phone/PhoneScreen';

import music from '@core/data/music';
import { useAudio } from '@core/audio/AudioContext';

function Game() {
	const { view, setView, isPhoneOpen } = useViewStore();
	const { component: ActionComponent } = getAction('Game');
	const { setMusicSource } = useAudio();

	const playMusic = (index = 0) => {
		const currentIndex = index % music.length;
		const track = music[currentIndex];
		console.log('Music: ' + track.title);
		setMusicSource(track.src, () => playMusic(currentIndex + 1));
	};

	useEffect(() => {
		playMusic();
	}, []);

	const renderView = () => {
		switch (view) {
			case 'office':
				return <Office />;
			case 'computer':
				return <Computer />;
			case 'colleague':
				return <Colleague />;
			case 'map':
				return <Map />;
			default:
				return null;
		}
	};

	return (
		<>
			<div id='pulse-container'></div>
			{isPhoneOpen && <PhoneScreen />}
			<ActionComponent />
			{renderView()}
		</>
	);
}

export default Game;
