import React, { useState } from 'react';
import useViewStore from '@core/store/useViewStore';

import map from '@assets/UI/Icons/map.svg';

function Map() {
	const { setView } = useViewStore();
	const [open, setOpen] = useState(false);
	return (
		<>
			<img
				src={map}
				alt='Карта'
				onClick={() => {
					setOpen(!open);
					if (open) {
						setView('map');
					} else {
						setView('office');
					}
				}}
			/>
		</>
	);
}

export default Map;
