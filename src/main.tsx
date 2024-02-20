import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
	MainPage,
	RecruitPage,
	GalaryPage,
	InformationUsePage,
	ManagementPage,
	ManageMeeteamPage,
	ManageRecruitPage,
	ManagePortpolioPage,
	RecruitCreatePage,
	OutputCreatePage,
	RecruitDetailPage,
	IntegratedManagePage,
	SignInPage,
	SchoolCertificationPage,
	NickNameSettingPage,
	SignUpPage,
	MyActivityManagePage,
	PassWordFindingPage,
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
				path: 'signIn',
				element: <SignInPage />,
			},
			{
				path: 'find/password',
				element: <PassWordFindingPage />,
			},
			{
				path: 'signUp',
				children: [
					{ path: '', element: <SignUpPage /> },
					{ path: 'school?', element: <SchoolCertificationPage /> },
					{ path: 'nickName', element: <NickNameSettingPage /> },
				],
			},
			{
				path: 'information',
				element: <InformationUsePage />,
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
					{
						path: 'activity',
						element: <MyActivityManagePage />,
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
