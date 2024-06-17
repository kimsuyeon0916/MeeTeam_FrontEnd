import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/index';
import { ScrollToTop } from './utils/index';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import ko from 'date-fns/locale/ko';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

function App() {
	return (
		<LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ko}>
			<QueryClientProvider client={queryClient}>
				<RecoilRoot>
					<Header />
					<main>
						<ScrollToTop />
						<Outlet />
					</main>
				</RecoilRoot>
			</QueryClientProvider>
		</LocalizationProvider>
	);
}

export default App;
