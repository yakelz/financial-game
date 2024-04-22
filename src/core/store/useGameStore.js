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
				emails: [],
				addEmail: (email) =>
					set((state) => ({
						emails: [...state.emails, { ...email, read: false }],
					})),
				setEmailRead: (index) =>
					set((state) => {
						const emails = state.emails.slice();
						emails[index] = { ...emails[index], read: true };
						return { emails };
					}),
				nextAction: () =>
					set((state) => ({
						currentActionIndex: (state.currentActionIndex + 1) % state.actions.length,
					})),
			}),
			{
				name: 'game-state',
				storage: jsonStorage,
				partialize: (state) => ({
					currentActionIndex: state.currentActionIndex,
					emails: state.emails,
				}),
			}
		)
	)
);

export default useGameStore;
