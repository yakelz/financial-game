// src/components/GameInterface.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startNewDay } from '../../../store/slices/gameSlice';

function Game() {
	const dispatch = useDispatch();
	const actionsHistory = useSelector((state) => state.game.actionsHistory);

	const handleStartNewDay = () => {
		dispatch(startNewDay());
	};

	return (
		<div>
			<button onClick={handleStartNewDay}>Начать новый день</button>
			<div>
				<h3>История действий:</h3>
				<ul>
					{actionsHistory.map((action, index) => (
						<li key={index}>{`${action.description} - ${action.timestamp}`}</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Game;
