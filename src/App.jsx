import './App.css';
import AppRouter from './utils/Router';
import FullScreenPrompt from '@utils/FullScreenPromt';
import { useAudioUnlocker } from '@utils/AudioUnlocker';

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
