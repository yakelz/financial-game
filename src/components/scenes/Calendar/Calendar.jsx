import React from 'react';
import styles from './Calendar.module.css';
import CalendarIco from '@assets/UI/Icons/calendar.svg?react';
function Calendar() {
	return (
		<>
			<div className={styles.container}>
				<header className={styles.header}>
					<CalendarIco />
					<h2>Календарь</h2>
				</header>
				<main>
					<div className={styles.reminder}>
						<span>24 апреля 2024</span>
						<div className={styles.reminderCard}>
							<span className={styles.time}>12:00</span>
							<span className={styles.task}>взятие показаний Валентины Павловны</span>
						</div>
					</div>
				</main>
			</div>
		</>
	);
}

export default Calendar;
