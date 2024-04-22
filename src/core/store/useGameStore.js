import { create } from 'zustand';
import { persist, devtools, createJSONStorage } from 'zustand/middleware';

const jsonStorage = createJSONStorage(() => localStorage);

const useGameStore = create(
	devtools(
		persist(
			(set, get) => ({
				actions: [
					{ id: 0, day: 1, action: 'Start', time: '10:00' },
					{ id: 1, day: 1, action: 'Checking email', time: '10:05' },
					{ id: 2, day: 1, action: 'Checking protocol', time: '10:06' },
				],
				currentActionIndex: 0,
				nextAction: () =>
					set((state) => ({
						currentActionIndex: (state.currentActionIndex + 1) % state.actions.length,
					})),
			}),
			{
				name: 'game-state',
				storage: jsonStorage,
				partialize: (state) => ({ currentActionIndex: state.currentActionIndex }),
			}
		)
	)
);

export default useGameStore;
