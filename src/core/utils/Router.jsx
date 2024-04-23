import React, { useEffect, useState } from 'react';
import { Navigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './Layout';

import Menu from '@scenes/Menu/Menu';
import Office from '@scenes/Office/Office';
import Computer from '@scenes/Computer/Computer';

const AppRouter = () => {
	// const [active, setActive] = useState(false);
	// useEffect(() => {
	// 	setActive(true);
	// }, []);

	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<Menu />} />
					<Route path='*' element={<Navigate to='/' />} />

					{/* {active && ( */}
					<>
						<Route element={<Layout />}>
							<Route path='/game' element={<Office />} />
						</Route>
					</>
					{/* )} */}
				</Routes>
			</Router>
		</>
	);
};

export default AppRouter;
