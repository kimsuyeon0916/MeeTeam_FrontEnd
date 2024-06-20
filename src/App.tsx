import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
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
	const location = useLocation();
	console.log(location.pathname);
	return (
		<LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ko}>
			<QueryClientProvider client={queryClient}>
				<RecoilRoot>
					{!location.pathname.includes('signup') && <Header />}
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
