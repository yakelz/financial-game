import { useAudio } from '@core/audio/AudioContext';

import { useNavigate } from 'react-router-dom';

import Cutscene from '@scenes/Cutscene/Cutscene';
import useGameStore from '@core/store/useGameStore';
import { useEffect } from 'react';

const GameComponent = () => {
	const navigate = useNavigate();
	const { resetGame } = useGameStore();
	const { setVoiceSource, pauseMusic, setMusicSource } = useAudio();

	useEffect(() => {
		const timer = setTimeout(() => {
			pauseMusic();
		}, 100);
		return () => clearTimeout(timer);
	}, []);

	const videoEnded = () => {
		navigate('/');
		setVoiceSource('./Audio/Voices/final.mp3');
		resetGame();
		setMusicSource('./Audio/Music/bi2.mp3');
	};

	return <Cutscene videoSrc={'./Video/final.mp4'} onSkip={videoEnded} />;
};

export default {
	Game: {
		component: GameComponent,
	},
};
