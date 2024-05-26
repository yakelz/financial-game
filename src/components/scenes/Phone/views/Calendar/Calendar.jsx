import React, { useEffect } from 'react';
import styles from './Calendar.module.css';

import useGameStore from '@core/store/useGameStore';

function Calendar() {
	const { nextAction, currentActionIndex, reminders } = useGameStore();
	useEffect(() => {
		if (currentActionIndex === 5 && reminders[0]) {
			const timer = setTimeout(() => {
				nextAction();
			}, 2000);

			return () => clearTimeout(timer);
		}
	}, []);
	return (
		<div className={styles.container}>
			<main>
				{reminders.length > 0 ? (
					reminders.map((reminder, index) => (
						<div key={index} className={styles.reminder}>
							<span>{reminder.date}</span>
							<div className={styles.reminderCard}>
								<span className={styles.time}>{reminder.time}</span>
								<span className={styles.task}>{reminder.info}</span>
							</div>
						</div>
					))
				) : (
					<div className={styles.noReminders}>Напоминаний нет</div>
				)}
			</main>
		</div>
	);
}

export default Calendar;
