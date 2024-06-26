import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Nfe } from '../../pages/Home';
import { Login } from '../../pages/Login';

const AppRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/home" element={<Nfe />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
