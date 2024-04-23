import useViewStore from '@core/store/useViewStore';

import Background from '@ui/Background/Background';
import ArrowButton from '@ui/Buttons/ArrowButton/ArrowButton';

import backView from '@assets/Office/table.svg';
import BackArrow from '@assets/UI/Buttons/Arrows/arrow_1.svg?react';
import ComputerArrow from '@assets/UI/Buttons/Arrows/arrow_2.svg?react';

function Table() {
	const { setView, setOfficeSubView } = useViewStore();

	return (
		<>
			<ArrowButton
				position={{ bottom: '20%', left: '20%' }}
				onClick={() => {
					setView('computer');
					setOfficeSubView('computer');
				}}
			>
				<ComputerArrow />
			</ArrowButton>
			<ArrowButton
				position={{ bottom: '5%', left: '50%' }}
				onClick={() => setOfficeSubView('front')}
			>
				<BackArrow />
			</ArrowButton>
			<Background src={backView} />
		</>
	);
}

export default Table;
