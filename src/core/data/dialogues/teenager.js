const dialogues = {
	1: {
		id: 1,
		choices: [
			{
				id: 0,
				text: 'Здравствуй, меня зовут Данилов Александр Романович, я рядовой киберполиции. Мне необходимо, чтобы ты ответил на пару вопросов. Хорошо?',
				audio: './Audio/Voices/Teenager/1-1.mp3',
				responseId: 2,
			},
		],
	},
	2: {
		id: 2,
		name: 'Подросток',
		speech: 'Да',
		audio: './Audio/Voices/Teenager/2.mp3',
		choices: [
			{
				id: 0,
				text: 'Знаешь ли ты почему тебя вызвали в полицию?',
				audio: './Audio/Voices/Teenager/2-1.mp3',
				responseId: 3,
			},
		],
	},
	3: {
		id: 3,
		name: 'Подросток',
		speech: 'Да, но я не понимаю, что случилось.',
		audio: './Audio/Voices/Teenager/3.mp3',
		choices: [
			{
				id: 0,
				text: '19 февраля 2024 года в 16:32 тебе на карту пришли деньги. От кого они?',
				audio: './Audio/Voices/Teenager/3-1.mp3',
				responseId: 4,
			},
		],
	},
	4: {
		id: 4,
		name: 'Подросток',
		speech: 'Их мне высылает компания, которой я помогаю выплачивать зарплату сотрудникам.',
		audio: './Audio/Voices/Teenager/4.mp3',
		choices: [
			{
				id: 0,
				text: 'Почему им нужна твоя помощь?',
				audio: './Audio/Voices/Teenager/4-1.mp3',
				responseId: 5,
			},
			{
				id: 1,
				text: 'Как ты им помогаешь?',
				audio: './Audio/Voices/Teenager/4-2.mp3',
				responseId: 6,
			},
		],
	},
	5: {
		id: 5,
		name: 'Подросток',
		speech:
			'Из-за большого роста заказов, компания не успевает трудоустраивать иностранных работников и в банках оформлять личные карты.',
		audio: './Audio/Voices/Teenager/5.mp3',
		choices: [
			{
				id: 0,
				text: 'Как ты им помогаешь?',
				audio: './Audio/Voices/Teenager/4-2.mp3',
				responseId: 6,
			},
			{
				id: 1,
				text: 'Что за компания?',
				audio: './Audio/Voices/Teenager/5-2.mp3',
				responseId: 7,
			},
		],
	},
	6: {
		id: 6,
		name: 'Подросток',
		speech:
			'Мне отправляют деньги, а я их снимаю и отдаю бухгалтеру компании. Бывает просят перевести сразу им лично.',
		audio: './Audio/Voices/Teenager/6.mp3',
		choices: [
			{
				id: 0,
				text: 'Почему им нужна твоя помощь?',
				audio: './Audio/Voices/Teenager/4-1.mp3',
				responseId: 5,
			},
			{
				id: 1,
				text: 'Что за компания?',
				audio: './Audio/Voices/Teenager/5-2.mp3',
				responseId: 7,
			},
		],
	},
	7: {
		id: 7,
		name: 'Подросток',
		speech: 'Крупная строительная компания.',
		audio: './Audio/Voices/Teenager/7.mp3',
		choices: [
			{
				id: 0,
				text: 'Как называется?',
				audio: './Audio/Voices/Teenager/7-1.mp3',
				responseId: 8,
			},
		],
	},
	8: {
		id: 8,
		name: 'Подросток',
		speech: 'Строй Сервис Мастер Град.',
		audio: './Audio/Voices/Teenager/8.mp3',
		choices: [
			{
				id: 0,
				text: 'Хм, такой компании как будто не существует. Никакой информации о ней нет. Расскажи как ты нашел эту компанию?',
				audio: './Audio/Voices/Teenager/8-1.mp3',
				lockCondition: true,
				responseId: 9,
			},
		],
	},
	9: {
		id: 9,
		name: 'Подросток',
		speech: 'Я увидел объявление на сайте вакансий.',
		audio: './Audio/Voices/Teenager/9.mp3',
		choices: [
			{
				id: 0,
				text: 'Что было в объявлении написано?',
				audio: './Audio/Voices/Teenager/9-1.mp3',
				responseId: 10,
			},
		],
	},
	10: {
		id: 10,
		name: 'Подросток',
		speech:
			'В описании было указано, что устраивают с 14 лет, не нужно образование, можно совмещать с учёбой, так как мало работы. Ещё обещали хорошие выплаты. Я подумал, что мне подходит и перешел в телеграм-канал для связи.',
		audio: './Audio/Voices/Teenager/10.mp3',
		choices: [
			{
				id: 0,
				text: 'Хорошо, покажи аккаунт в телеграм, с которым ты общался.',
				audio: './Audio/Voices/Teenager/10-1.mp3',
				responseId: 11,
			},
		],
	},
	11: {
		id: 11,
		name: 'Подросток',
		choices: [
			{
				id: 0,
				text: 'Хорошо, записал. Давай теперь расскажу, что произошло. К сожалению, ты помогал мошенникам. Одна из сумм - средства обманутой пожилой женщины. Тебя сделали дропом.',
				audio: './Audio/Voices/Teenager/11-1.mp3',
				responseId: 12,
			},
		],
	},
	12: {
		id: 12,
		name: 'Подросток',
		speech: 'Дроп? Что это значит?',
		audio: './Audio/Voices/Teenager/12.mp3',
		choices: [
			{
				id: 0,
				text: 'Это подставное лицо. Тот, кто оказывает услуги мошенникам.',
				audio: './Audio/Voices/Teenager/12-1.mp3',
				responseId: 13,
			},
		],
	},
	13: {
		id: 13,
		name: 'Подросток',
		speech: 'Теперь меня накажут?',
		audio: './Audio/Voices/Teenager/13.mp3',
		choices: [
			{
				id: 0,
				text: 'Это зависит от решения суда. При благоприятном исходе банки просто заблокируют все твои счета, и наложат запрет на открытие их в дальнейшем. Ты можешь помочь поймать мошенников.',
				audio: './Audio/Voices/Teenager/13-1.mp3',
				responseId: 14,
			},
		],
	},
	14: {
		id: 14,
		name: 'Подросток',
		speech: 'Конечно, что нужно сделать?',
		audio: './Audio/Voices/Teenager/14.mp3',
		choices: [
			{
				id: 0,
				text: 'В следующий раз, когда нужно будет снять деньги в банке, сообщи место и время встречи. Далее будет действовать оперативная группа.',
				audio: './Audio/Voices/Teenager/14-1.mp3',
				responseId: 15,
			},
		],
	},
	15: {
		id: 15,
		name: 'Подросток',
		speech: 'Да, я согласен.',
		audio: './Audio/Voices/Teenager/15.mp3',
		choices: [
			{
				id: 0,
				text: 'Отлично',
				audio: './Audio/Voices/Teenager/15-1.mp3',
				responseId: null,
			},
		],
	},
};

export default dialogues;
