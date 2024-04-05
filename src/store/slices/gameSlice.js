import { createSlice } from '@reduxjs/toolkit';

export const gameSlice = createSlice({
	name: 'game',
	initialState: {
		actionsHistory: [],
		currentAction: null,
		gameTime: '10:00',
	},
	reducers: {
		startNewDay: (state) => {
			const action = {
				id: 'start_day',
				type: 'start_day',
				description: 'Начало нового дня',
				timestamp: new Date().toISOString(),
			};
			state.actionsHistory.push(action);
			state.currentAction = action;
		},
		// Дополнительные действия...
	},
});

export const { startNewDay } = gameSlice.actions;

export default gameSlice.reducer;
