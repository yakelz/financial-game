import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Gamebar from '@ui/Gamebar/Gamebar';
import useViewStore from '@core/store/useViewStore';

function Layout() {
	const { view } = useViewStore();
	return (
		<>
			{view != 'computer' && <Gamebar />}
			<Outlet />
		</>
	);
}

export default Layout;
