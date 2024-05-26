import { create } from 'zustand';
import grandmother from '@core/data/dialogues/grandmother';

const useDialogStore = create((set, get) => ({
	answerPhonemes: '',
	setAnswerPhonemes: (answerPhonemes) => set({ answerPhonemes }),
	currentDialogId: 1,
	dialogues: grandmother,
	setCurrentDialogId: (id) => set({ currentDialogId: id }),
	toggleChoiceLock: (dialogId, choiceIndex) => {
		const store = get(); // Получаем текущее состояние
		const dialogues = store.dialogues;

		// Проверяем, существует ли диалог с таким dialogId и есть ли выбор с таким choiceIndex
		if (
			dialogues[dialogId] &&
			dialogues[dialogId].choices &&
			dialogues[dialogId].choices[choiceIndex]
		) {
			const choice = dialogues[dialogId].choices[choiceIndex];
			const updatedChoices = [...dialogues[dialogId].choices];

			updatedChoices[choiceIndex] = {
				...choice,
				lockCondition: choice.lockCondition !== undefined ? !choice.lockCondition : true,
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
		} else {
			console.error('Dialog or choice not found', { dialogId, choiceIndex });
		}
	},

	// showQuestion: false,
	// showAnswer: false,
	// showChoices: true,
	// setShowQuestion: (state) => set({ showQuestion: state }),
	// setShowAnswer: (state) => set({ showAnswer: state }),
	// setShowChoices: (state) => set({ showChoices: state }),

	// selectedChoice: '',
	// answerText: '',
	// questionText: '',

	// setSelectedChoice: (text) => {
	// 	set({ selectedChoice: text });
	// },
	// setAnswerText: (text) => set({ answerText: text }),
	// setQuestionText: (text) => set({ questionText: text }),
}));

export default useDialogStore;
