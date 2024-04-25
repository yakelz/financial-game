import { create } from 'zustand';
import grandmother from '@core/data/dialogues/grandmother';

const useDialogStore = create((set, get) => ({
	currentDialogId: 1,
	dialogues: grandmother,
	setCurrentDialogId: (id) => set({ currentDialogId: id }),
	toggleChoiceLock: (dialogId, choiceIndex) => {
		const dialogues = get().dialogues;
		const choice = dialogues[dialogId].choices[choiceIndex];
		const updatedChoices = [...dialogues[dialogId].choices];
		updatedChoices[choiceIndex] = {
			...choice,
			unlockCondition: !choice.unlockCondition,
		};
		set({
			dialogues: {
				...dialogues,
				[dialogId]: {
					...dialogues[dialogId],
					choices: updatedChoices,
				},
			},
		});
	},
}));

export default useDialogStore;
