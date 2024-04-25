import { create } from 'zustand';

const useDialogStore = create((set) => ({
	currentDialogue: 1,
	showQuestion: false,
	showAnswer: false,
	text: '',
	choices: [],
	setDialogue: (id) => set({ currentDialogue: id }),
	setShowQuestion: (flag) => set({ showQuestion: flag }),
	setShowAnswer: (flag) => set({ showAnswer: flag }),
	setText: (newText) => set({ text: newText }), // Добавление управления текстом
	setChoices: (choices) => set({ choices: choices }),
}));

export default useDialogStore;
