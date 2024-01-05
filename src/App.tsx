import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/index';
import { ScrollToTop } from './utils/index';
import { RecoilRoot } from 'recoil';

function App() {
	return (
		<>
			<RecoilRoot>
				<Header />
				<main>
					<ScrollToTop />
					<Outlet />
				</main>
			</RecoilRoot>
		</>
	);
}

export default App;
