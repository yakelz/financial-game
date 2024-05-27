const dialogues = {
	1: {
		id: 1,
		choices: [
			{
				id: 0,
				text: 'Здравствуй, Степан. Не отвлекаю тебя?',
				audio: './Audio/Voices/Colleague/1-1.mp3',
				responseId: 2,
			},
		],
	},
	2: {
		id: 2,
		name: 'Степан Тимофеевич',
		speech: 'Нет. А что такое?',
		audio: './Audio/Voices/Colleague/2.mp3',
		choices: [
			{
				id: 0,
				text: 'Да вот хотел спросить про новое дело.',
				audio: './Audio/Voices/Colleague/2-1.mp3',
				responseId: 3,
			},
		],
	},
	3: {
		id: 3,
		name: 'Степан Тимофеевич',
		speech: 'Схема с телефонным мошенничеством?',
		audio: './Audio/Voices/Colleague/3.mp3',
		choices: [
			{
				id: 0,
				text: 'Да-да, оно. Вот в чём дело. Счёт, на который перевели денежные средства принадлежит несовершеннолетнему.',
				audio: './Audio/Voices/Colleague/3-1.mp3',
				responseId: 4,
			},
		],
	},
	4: {
		id: 4,
		name: 'Степан Тимофеевич',
		speech: 'Интересно. Явно не он беседовал с жертвой.',
		audio: './Audio/Voices/Colleague/4.mp3',
		choices: [
			{
				id: 0,
				text: 'Тогда как он может быть связан?',
				audio: './Audio/Voices/Colleague/4-1.mp3',
				responseId: 6,
			},
			{
				id: 1,
				text: 'Может он является родственником мошенников?',
				audio: './Audio/Voices/Colleague/4-2.mp3',
				responseId: 5,
			},
		],
	},
	5: {
		id: 5,
		name: 'Степан Тимофеевич',
		speech: 'Маловероятно, так как тогда можно будет легко выйти на мошенников.',
		audio: './Audio/Voices/Colleague/5.mp3',
		choices: [
			{
				id: 0,
				text: 'Тогда как он может быть связан?',
				audio: './Audio/Voices/Colleague/4-1.mp3',
				responseId: 6,
			},
		],
	},
	6: {
		id: 6,
		name: 'Степан Тимофеевич',
		speech: 'Похоже, что он просто дроп.',
		audio: './Audio/Voices/Colleague/6.mp3',
		choices: [
			{
				id: 0,
				text: 'Дроп? Что это значит?',
				audio: './Audio/Voices/Colleague/6-1.mp3',
				responseId: 7,
			},
		],
	},
	7: {
		id: 7,
		name: 'Степан Тимофеевич',
		speech: 'Это подставное лицо. Тот, кто оказывает услуги мошенникам.',
		audio: './Audio/Voices/Colleague/7.mp3',
		choices: [
			{
				id: 0,
				text: 'Как человек становится дропом?',
				audio: './Audio/Voices/Colleague/7-1.mp3',
				responseId: 8,
			},
			{
				id: 1,
				text: 'Его деятельность тоже незаконна?',
				audio: './Audio/Voices/Colleague/7-2.mp3',
				responseId: 9,
			},
			{
				id: 2,
				text: 'Если это услуги, то за них есть какая-то оплата?',
				audio: './Audio/Voices/Colleague/7-3.mp3',
				responseId: 10,
			},
			{
				id: 3,
				text: 'Зачем нужен дроп?',
				audio: './Audio/Voices/Colleague/7-4.mp3',
				responseId: 11,
			},
			{
				id: 4,
				text: 'Какие услуги?',
				audio: './Audio/Voices/Colleague/7-5.mp3',
				responseId: 12,
			},
		],
	},
	8: {
		id: 8,
		name: 'Степан Тимофеевич',
		speech:
			'Часто в процессе поиска работы можно наткнуться на объявления на сайтах, в соцсетях, да хоть на заборах. Затем "устраивается на работу" к мошенникам.',
		audio: './Audio/Voices/Colleague/8.mp3',
		choices: [
			{
				id: 0,
				text: 'Ты мне очень помог. Спасибо.',
				audio: './Audio/Voices/Colleague/8-1.mp3',
				responseId: 13,
			},
		],
	},
	9: {
		id: 9,
		name: 'Степан Тимофеевич',
		speech: 'Да, потому что дропперы работают с незаконно-полученными денежными средствами.',
		audio: './Audio/Voices/Colleague/9.mp3',
		choices: [
			{
				id: 0,
				text: 'Почему человек становится дропом, если это незаконно?',
				audio: './Audio/Voices/Colleague/9-1.mp3',
				responseId: 14,
			},
		],
	},
	10: {
		id: 10,
		name: 'Степан Тимофеевич',
		speech: 'Да, дроп оставляет часть суммы как вознаграждение.',
		audio: './Audio/Voices/Colleague/10.mp3',
		choices: [
			{
				id: 0,
				text: 'Ты мне очень помог. Спасибо.',
				audio: './Audio/Voices/Colleague/8-1.mp3',
				responseId: 13,
			},
		],
	},
	11: {
		id: 11,
		name: 'Степан Тимофеевич',
		speech: 'Запутать следы, так чтобы они не привели к организаторам.',
		audio: './Audio/Voices/Colleague/11.mp3',
		choices: [
			{
				id: 0,
				text: 'Ты мне очень помог. Спасибо.',
				audio: './Audio/Voices/Colleague/8-1.mp3',
				responseId: 13,
			},
		],
	},
	12: {
		id: 12,
		name: 'Степан Тимофеевич',
		speech: 'Обналичивание средств и возможно последующий их перевод.',
		audio: './Audio/Voices/Colleague/12.mp3',
		choices: [
			{
				id: 0,
				text: 'Ты мне очень помог. Спасибо.',
				audio: './Audio/Voices/Colleague/8-1.mp3',
				responseId: 13,
			},
		],
	},
	13: {
		id: 13,
		name: 'Степан Тимофеевич',
		speech:
			'Обращайся. Если остались ещё вопросы, загляни в обучающие курсы, там, например, есть типичный портрет дропа. Возможно пригодится для расследования.',
		audio: './Audio/Voices/Colleague/13.mp3',
		choices: [
			{
				id: 0,
				text: 'Да, обязательно посмотрю.',
				audio: './Audio/Voices/Colleague/13-1.mp3',
				responseId: null,
			},
		],
	},
	14: {
		id: 14,
		name: 'Степан Тимофеевич',
		speech:
			'Людей привлекают "лёгкимм заработком". Иногда дроп может не знать источник денег и не понимать, чем он на самом деле занимается.',
		audio: './Audio/Voices/Colleague/14.mp3',
		choices: [
			{
				id: 0,
				text: 'Их тоже обманывают?',
				audio: './Audio/Voices/Colleague/14-1.mp3',
				responseId: 15,
			},
		],
	},
	15: {
		id: 15,
		name: 'Степан Тимофеевич',
		speech:
			'Всегда есть легенда, для чего нужна такая сложная схема работы. Распространенный вариант: уход от налогов. Эта легенда тоже незаконна, но уход от налогов не воспринимается как нечто страшное, поэтому вероятность того, что жертва согласится достаточно высока. Еще один вариант легенды — объявление от имени строительной компании, у которой на стройке нелегальные рабочие, которые не могут завести себе карты для выплаты ЗП. Соответственно, жертве выдают карты, на которые якобы будет приходить ЗП для этих работников, а далее их надо будет переводить на какие-то другие счета/карты.',
		audio: './Audio/Voices/Colleague/15.mp3',
		choices: [
			{
				id: 0,
				text: 'Ты мне очень помог. Спасибо.',
				audio: './Audio/Voices/Colleague/8-1.mp3',
				responseId: 13,
			},
		],
	},
};

export default dialogues;
