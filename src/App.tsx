import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/index';
import { ScrollToTop } from './utils/index';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<RecoilRoot>
				<Header />
				<main>
					<ScrollToTop />
					<Outlet />
				</main>
			</RecoilRoot>
		</QueryClientProvider>
	);
}

export default App;
