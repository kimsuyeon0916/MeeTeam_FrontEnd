import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
	MainPage,
	RecruitPage,
	GalaryPage,
	MemberPage,
	InformationUsePage,
	MeeTeamCreatePage,
	ManagementPage,
	ManagePage,
} from './pages/index.ts';
import './globalStyle.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '',
				element: <MainPage />,
			},
			{
				path: 'recruit',
				element: <RecruitPage />,
			},
			{
				path: 'galary',
				element: <GalaryPage />,
			},
			{
				path: 'member',
				element: <MemberPage />,
			},
			{
				path: 'information',
				element: <InformationUsePage />,
			},
			{
				path: 'create', // meeteam/create
				element: <MeeTeamCreatePage />,
			},
			{
				path: 'meeteam/:meeteamId?',
				element: <ManagementPage />,
			},
			{
				path: 'manage',
				element: <ManagePage />,
				children: [
					{
						path: '',
						element: <>전체 밋팀 관리</>,
					},
					{
						path: 'recruit',
						element: <>구인글</>,
					},
					{
						path: 'portpolio',
						element: <>포트폴리오</>,
					},
				],
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
