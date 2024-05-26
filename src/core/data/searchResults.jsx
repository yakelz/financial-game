const resultsData = {
	mastergrad: {
		icon: './Assets/Search/mastergrad.svg',
		title: 'Строй Сервис Мастер Град: информация о компании',
		breadcrumbs: 'companies.ru > Строй Сервис Мастер Град',
		description:
			'Генеральный директор организации, ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕСТВЕННОСТЬЮ “СтройСервисМастерГрад”.',
		innerHTML: (
			<>
				<h3>Компании не существует</h3>
				<p>Не найдено ни одной записи</p>
				<p>Сбросьте или измените введенное значение поиска</p>
			</>
		),
	},
	phone: {
		icon: './Assets/Search/phone.svg',
		title: '+73776488242: 9 отзывов и статус номера +73776488242',
		breadcrumbs: 'zvonili.com > po-nomeru/73776488242',
		description:
			'Здесь мы собрали всю информацию по номеру +73776488242: кто звонил, отзывы, оператор, какой регион, вариант набора.',
		innerHTML: (
			<>
				<img src='./Assets/Search/phone_inner.svg' alt='Страница проверки телефона' />
			</>
		),
	},
};

const searchKeys = {
	стройсервисмастерград: 'mastergrad',
	'строй сервис мастер град': 'mastergrad',
	83776488242: 'phone',
	73776488242: 'phone',
	'+73776488242': 'phone',
};

export { searchKeys, resultsData };
