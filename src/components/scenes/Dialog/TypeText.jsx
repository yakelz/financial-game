import React, { useState, useEffect } from 'react';
import useAudioStore from '@core/store/useAudioStore';

const TypeText = ({ text, audio, onFinished }) => {
	const [output, setOutput] = useState('');
	const [startTyping, setStartTyping] = useState(false);

	const { setVoiceSrc } = useAudioStore();

	useEffect(() => {
		if (text && audio) {
			setStartTyping(true); // Разрешаем начало печатания после загрузки текста и аудио
		}
	}, [text, audio]);

	useEffect(() => {
		if (startTyping) {
			setVoiceSrc(audio, () => {
				console.log(onFinished);
				onFinished && onFinished();
			});
			let i = 0;
			setOutput(''); // Обнуляем вывод перед началом печатания
			const typing = setInterval(() => {
				setOutput((prev) => prev + text.charAt(i));
				i++;
				if (i === text.length) {
					clearInterval(typing);
				}
			}, 60); //скорость печатания текста
			return () => clearInterval(typing);
		}
	}, [startTyping, text, audio, onFinished, setVoiceSrc]);

	return <span>{output}</span>;
};

export default TypeText;
