import { create } from 'zustand';
import { persist, devtools, createJSONStorage } from 'zustand/middleware';
import actions from '@core/data/actions';

const jsonStorage = createJSONStorage(() => localStorage);

const useGameStore = create(
	devtools(
		persist(
			(set, get) => ({
				// Actions
				actions: actions,
				currentActionIndex: 0,
				nextAction: () =>
					set((state) => ({
						currentActionIndex: (state.currentActionIndex + 1) % state.actions.length,
					})),

				// Emails
				emails: [],
				addEmail: (email) =>
					set((state) => ({
						emails: [{ ...email, read: false }, ...state.emails],
					})),
				setEmailRead: (index) =>
					set((state) => {
						const emails = state.emails.slice();
						emails[index] = { ...emails[index], read: true };
						return { emails };
					}),

				// Cases
				caseItems: [],
				addCaseItem: (caseItem) =>
					set((state) => ({
						caseItems: [{ ...caseItem, read: false }, ...state.caseItems],
					})),
				setCaseRead: (index) =>
					set((state) => {
						const caseItems = state.caseItems.slice();
						caseItems[index] = { ...caseItems[index], read: true };
						return { caseItems };
					}),

				// Calendar
				reminders: [],
				addReminder: (reminder) =>
					set((state) => ({
						reminders: [{ ...reminder, finished: false }, ...state.reminders],
					})),
				setReminderFinish: (id) =>
					set((state) => {
						const reminders = state.reminders.slice();
						reminders[id] = { ...reminders[id], finished: true };
						return { reminders };
					}),

				caseProgress: 0,
				nextCaseProgress: () =>
					set((state) => ({
						caseProgress: state.caseProgress !== 7 ? state.caseProgress + 1 : state.caseProgress,
					})),
			}),
			{
				name: 'game-state',
				storage: jsonStorage,
				partialize: (state) => ({
					currentActionIndex: state.currentActionIndex,
					emails: state.emails,
					caseItems: state.caseItems,
				}),
			}
		)
	)
);

export default useGameStore;
