import './Fonts.css';
import AppRouter from '@core/utils/Router';
import FullScreenPrompt from '@core/utils/FullScreenPromt';
import { useAudioUnlocker } from '@core/audio/AudioUnlocker';

function App() {
	useAudioUnlocker();
	return (
		<>
			{/* <FullScreenPrompt /> */}
			<AppRouter />
		</>
	);
}

export default App;
