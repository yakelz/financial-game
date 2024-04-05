import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Gamebar from '@ui/Gamebar/Gamebar';

function Layout() {
	return (
		<>
			<Gamebar />
			<Outlet />
		</>
	);
}

export default Layout;
