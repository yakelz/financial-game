const dialogues = {
	1: {
		id: 1,
		audio: './Audio/Voices/1.mp3',
		choices: [
			{
				text: 'Здравствуйте, Валентина Павловна. Я начал расследовать ваше дело. Мне очень жаль, но кажется Вы столкнулись с мошенниками.',
				audio: './Audio/Voices/1-1.mp3',
				responseId: 2,
			},
			{
				text: 'Сколько вам лет?',
				audio: './Audio/Voices/1-2.mp3',
				responseId: 3,
				unlockCondition: false, // если его в других выборах нет, то по default = true
			},
		],
	},
	2: {
		id: 2,
		audio: './Audio/Voices/2.mp3',
		name: 'Валентина Павловна',
		speech: 'О, неужели? Это ужасно! Почему? С чего Вы взяли?',
		choices: [],
	},
	3: {
		id: 3,
		audio: './Audio/Voices/3.mp3',
		name: 'Валентина Павловна',
		speech: 'Мне 65',
		choices: [],
	},
	//  остальные диалоги
};

export default dialogues;
