import useViewStore from '@core/store/useViewStore';

import Background from '@ui/Background/Background';
import ArrowButton from '@ui/Buttons/ArrowButton/ArrowButton';

import backView from '@assets/Office/front.svg';
import DoorArrow from '@assets/UI/Buttons/Arrows/arrow_1.svg?react';
import TableArrow from '@assets/UI/Buttons/Arrows/arrow_2.svg?react';
import BackArrow from '@assets/UI/Buttons/Arrows/arrow_3.svg?react';

function Front() {
	const { setOfficeSubView } = useViewStore();

	return (
		<>
			<ArrowButton
				position={{ bottom: '35%', left: '40%' }}
				onClick={() => setOfficeSubView('table')}
			>
				<TableArrow />
			</ArrowButton>
			<ArrowButton
				position={{ bottom: '5%', left: '60%' }}
				onClick={() => setOfficeSubView('door')}
			>
				<DoorArrow />
			</ArrowButton>
			<ArrowButton position={{ top: '30%', right: '40%' }} onClick={() => setOfficeSubView('back')}>
				<BackArrow />
			</ArrowButton>
			<Background src={backView} />
		</>
	);
}

export default Front;
