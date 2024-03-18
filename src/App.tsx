import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/index';
import { ScrollToTop } from './utils/index';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} />
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
