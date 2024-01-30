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
	ManageMeeteamPage,
	ManageRecruitPage,
	ManagePortpolioPage,
	RecruitCreatePage,
	OutputCreatePage,
	RecruitDetailPage,
	IntegratedManagePage,
	MyActivityManagePage,
	OutputPreviewPage,
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
				path: 'recruit/:recruitId?',
				element: <RecruitDetailPage />,
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
				path: 'activity',
				element: <MyActivityManagePage />,
			},
			{
				path: 'create/meeteam', // meeteam/create
				element: <MeeTeamCreatePage />,
			},
			{
				path: 'create/recruit',
				element: <RecruitCreatePage />,
			},
			{
				path: 'create/output',
				element: <OutputCreatePage />,
			},
			{
				path: 'create/output/preview',
				element: <OutputPreviewPage />,
			},
			{
				path: 'manage/meeteam/:meeteamId?',
				element: <ManagementPage />,
			},
			{
				path: 'manage',
				element: <IntegratedManagePage />,
				children: [
					{
						path: 'meeteam',
						element: <ManageMeeteamPage />,
						children: [
							{
								path: ':meeteamId?',
								element: <ManagementPage />,
							},
						],
					},
					{
						path: 'recruit',
						element: <ManageRecruitPage />,
					},
					{
						path: 'portpolio',
						element: <ManagePortpolioPage />,
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
