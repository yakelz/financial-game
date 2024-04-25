const dialogues = {
	1: {
		id: 1,
		choices: [
			{
				id: 1,
				text: 'Здравствуйте, Валентина Павловна. Я начал расследовать ваше дело. Мне очень жаль, но кажется Вы столкнулись с мошенниками.',
				audio: './Audio/Voices/Grandmother/1-1.mp3',
				responseId: 2,
			},
			{
				id: 2,
				text: 'Сколько вам лет?',
				audio: './Audio/Voices/Grandmother/1-2.mp3',
				responseId: 3,
				unlockCondition: false, // если его в других выборах нет, то по default = true
			},
		],
	},
	2: {
		id: 2,
		audio: './Audio/Voices/Grandmother/res1-1.mp3',
		name: 'Валентина Павловна',
		speech: 'Почему? С чего Вы взяли?',
		choices: [
			{
				id: 1,
				text: 'Здравствуйте, Валентина Павловна. Я начал расследовать ваше дело. Мне очень жаль, но кажется Вы столкнулись с мошенниками.',
				audio: './Audio/Voices/Grandmother/1-1.mp3',
				responseId: 2,
			},
			{
				id: 2,
				text: 'Сколько вам лет?',
				audio: '/Audio/Voices/Grandmother/1-2.mp3',
				responseId: 3,
				unlockCondition: false, // если его в других выборах нет, то по default = true
			},
		],
	},
	3: {
		id: 3,
		audio: './Audio/Voices/Grandmother/res1-2.mp3',
		name: 'Валентина Павловна',
		speech: 'Мне 65',
		choices: [
			{
				id: 1,
				text: 'Что',
				audio: './Audio/Voices/Grandmother/1-1.mp3',
				responseId: 2,
				unlockCondition: true,
			},
			{
				id: 2,
				text: 'Кто',
				audio: './Audio/Voices/Grandmother/1-2.mp3',
				responseId: 3,
				unlockCondition: false, // если его в других выборах нет, то по default = true
			},
		],
	},
	//  остальные диалоги
};

export default dialogues;
