const dialogues = {
	1: {
		id: 1,
		choices: [
			{
				id: 0,
				text: 'Здравствуйте, Валентина Павловна. Я начал расследовать ваше дело. Мне очень жаль, но кажется Вы столкнулись с мошенниками.',
				phonemes:
					'здраствуйте валентина павловна яначал расследовать вашедело мнеоченьжаль ноказжеться вь столкнулись смошенниками',
				audio: './Audio/Voices/Grandmother/1-1.mp3',
				responseId: 2,
			},
		],
	},
	2: {
		id: 2,
		audio: './Audio/Voices/Grandmother/2.mp3',
		name: 'Валентина Павловна',
		speech: 'Почему? С чего Вы взяли?',
		phonemes: 'пачимууу с чиго ви взялиии   ',
		choices: [
			{
				id: 0,
				text: 'Сотрудники полиции не проводят следственные мероприятия по телефону.',
				audio: './Audio/Voices/Grandmother/2-1.mp3',
				responseId: 3,
			},
		],
	},
	3: {
		id: 3,
		audio: './Audio/Voices/Grandmother/3.mp3',
		name: 'Валентина Павловна',
		speech: 'Тогда кто мне звонил?',
		phonemes: 'Тагда кто мне звонилл  ',
		choices: [
			{
				id: 0,
				text: 'Это были мошенники. Вы собственноручно перевели им деньги.',
				audio: './Audio/Voices/Grandmother/3-1.mp3',
				responseId: 4,
			},
		],
	},
	4: {
		id: 4,
		audio: './Audio/Voices/Grandmother/4.mp3',
		name: 'Валентина Павловна',
		speech: 'И что теперь делать?',
		phonemes: 'и чтоо теперь делать',
		choices: [
			{
				id: 0,
				text: 'Нам нужно с Вами собрать как можно больше улик по Вашему инциденту. Надеюсь Вы мне в этом поможете.',
				audio: './Audio/Voices/Grandmother/4-1.mp3',
				responseId: 5,
			},
		],
	},
	5: {
		id: 5,
		audio: './Audio/Voices/Grandmother/5.mp3',
		name: 'Валентина Павловна',
		speech: 'Да, конечно',
		phonemes: 'Даааа коонееешно',
		choices: [
			{
				id: 0,
				text: 'Сколько средств Вы перевели на "безопасный" счет?',
				audio: './Audio/Voices/Grandmother/5-1.mp3',
				responseId: 7,
			},
			{
				id: 1,
				text: 'Сохранился ли звонок от мошенников в журнале звонков телефона?',
				audio: './Audio/Voices/Grandmother/5-2.mp3',
				responseId: 6,
			},
		],
	},
	6: {
		id: 6,
		audio: './Audio/Voices/Grandmother/6.mp3',
		name: 'Валентина Павловна',
		speech: 'Да',
		phonemes: 'ааа',
		choices: [
			{
				id: 0,
				text: 'Назовите номер телефона, с которого поступил звонок',
				audio: './Audio/Voices/Grandmother/6-1.mp3',
				responseId: 8,
			},
			{
				id: 1,
				text: 'Когда поступил звонок?',
				audio: './Audio/Voices/Grandmother/6-2.mp3',
				responseId: 9,
			},
		],
	},
	7: {
		id: 7,
		audio: './Audio/Voices/Grandmother/7.mp3',
		name: 'Валентина Павловна',
		speech: 'Это были отложенные деньги на ремонт дачи. 380 тысяч рублей',
		phonemes: 'Это были отложенные деньги на ремонт ддааачи триста восемьдесят тысячь рублей',
		choices: [
			{
				id: 0,
				text: 'Это считается значительным ущербом',
				audio: './Audio/Voices/Grandmother/7-1.mp3',
				responseId: 10,
				lockCondition: false,
			},
		],
	},
	8: {
		id: 8,
		audio: './Audio/Voices/Grandmother/8.mp3',
		name: 'Валентина Павловна',
		speech: '+7(377) 648-82-42',
		phonemes: 'плюс семь триста семдясят семь шесть четыре восемь два четыре два',
		choices: [
			{
				id: 0,
				text: 'На данный номер уже есть отрицательные отзывы в Интернете.',
				audio: './Audio/Voices/Grandmother/8-1.mp3',
				responseId: 11,
				lockCondition: true,
			},
		],
	},
	9: {
		id: 9,
		audio: './Audio/Voices/Grandmother/9.mp3',
		name: 'Валентина Павловна',
		speech: '19 февраля в 16:12',
		phonemes: 'дивятнадцатого февраля в шестнадцать часов двенадцать минут',
		choices: [
			{
				id: 0,
				text: 'Назовите номер телефона, с которого поступил звонок',
				audio: './Audio/Voices/Grandmother/6-1.mp3',
				responseId: 12,
			},
		],
	},
	10: {
		id: 10,
		audio: null,
		name: 'Валентина Павловна',
		speech: null,
		choices: [
			{
				id: 0,
				text: 'Сохранился ли звонок от мошенников в журнале звонков телефона?',
				audio: './Audio/Voices/Grandmother/5-2.mp3',
				responseId: 6,
			},
		],
	},
	11: {
		id: 11,
		audio: null,
		name: 'Валентина Павловна',
		speech: null,
		choices: [
			{
				id: 0,
				text: 'Для протокола, когда поступил звонок?',
				audio: './Audio/Voices/Grandmother/11-1.mp3',
				responseId: 13,
			},
		],
	},
	12: {
		id: 12,
		audio: './Audio/Voices/Grandmother/8.mp3',
		name: 'Валентина Павловна',
		speech: '+7(377) 648-82-42',
		phonemes: 'плюс семь триста семдясят семь шесть четыре восемь два четыре два',
		choices: [
			{
				id: 0,
				text: 'На данный номер уже есть отрицательные отзывы в Интернете.',
				audio: './Audio/Voices/Grandmother/8-1.mp3',
				responseId: 15,
				lockCondition: true,
			},
		],
	},
	13: {
		id: 13,
		audio: './Audio/Voices/Grandmother/9.mp3',
		name: 'Валентина Павловна',
		speech: '19 февраля в 16:12',
		phonemes: 'дивятнадцатого февраля в шестнадцать часов двенадцать минут',
		choices: [
			{
				id: 0,
				text: 'Укажите номер счёта, на который были переведены деньги',
				audio: './Audio/Voices/Grandmother/13-1.mp3',
				responseId: 14,
			},
		],
	},
	14: {
		id: 14,
		audio: './Audio/Voices/Grandmother/14.mp3',
		name: 'Валентина Павловна',
		speech: '7122 9176 9782 0967',
		phonemes:
			'семдясят один двадцать два      десяноста один семьдесят шесь     девяноста семь восемдесят два     ноль девять шесьдесят семь  ',
		choices: [
			{
				id: 0,
				text: 'Спасибо, Валентина Павловна! Вы мне очень помогли. Я начну расследование и если будут новые вопросы к Вам, Вы получите в письменном виде вызов в отделение полиции.',
				audio: './Audio/Voices/Grandmother/14-1.mp3',
				responseId: null,
			},
		],
	},
	15: {
		id: 15,
		audio: null,
		name: 'Валентина Павловна',
		speech: null,
		choices: [
			{
				id: 0,
				text: 'Укажите номер счёта, на который были переведены деньги',
				audio: './Audio/Voices/Grandmother/13-1.mp3',
				responseId: 14,
			},
		],
	},
};

export default dialogues;
