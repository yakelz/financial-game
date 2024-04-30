import useViewStore from '@core/store/useViewStore';

import Background from '@ui/Background/Background';
import ArrowButton from '@ui/Buttons/ArrowButton/ArrowButton';

import backView from '@assets/Office/back.svg';
import TableArrow from '@assets/UI/Buttons/Arrows/arrow_4.svg?react';
import BackArrow from '@assets//UI/Buttons/Arrows/arrow_1.svg?react';
import DoorArrow from '@assets/UI/Buttons/Arrows/arrow_2.svg?react';

function Back() {
	const { setOfficeSubView } = useViewStore();
	return (
		<>
			<ArrowButton
				position={{ bottom: '30%', right: '45%' }}
				onClick={() => setOfficeSubView('table')}
			>
				<TableArrow />
			</ArrowButton>
			{/* <ArrowButton position={{ top: '45%', right: '38%' }} onClick={() => setCurrentView('front')}>
				<TableArrow />
			</ArrowButton> */}
			<ArrowButton
				position={{ bottom: '5%', left: '60%' }}
				onClick={() => setOfficeSubView('front')}
			>
				<BackArrow />
			</ArrowButton>
			<ArrowButton
				position={{ bottom: '40%', left: '30%' }}
				onClick={() => setOfficeSubView('door')}
			>
				<DoorArrow />
			</ArrowButton>
			<Background src={backView} />
		</>
	);
}

export default Back;
