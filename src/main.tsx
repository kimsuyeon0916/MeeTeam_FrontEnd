import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
	MainPage,
	RecruitPage,
	GalaryPage,
	RecruitCreatePage,
	OutputCreatePage,
	RecruitDetailPage,
	MyActivityLike,
	SignInPage,
	SchoolCertificationPage,
	NicknameSettingPage,
	SignUpPage,
	PassWordFindingPage,
	MyActivityWrapper,
	MyActivityInvited,
	MyActivityApply,
	MyActivityBookmark,
	ProfileDetailsPage,
	ProfileEditPage,
	PortfolioDetailsPage,
	PortfolioEditPage,
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
				path: 'signin',
				element: <SignInPage />,
			},
			{
				path: 'find/password',
				element: <PassWordFindingPage />,
			},
			{
				path: 'signup',
				children: [
					{ path: '', element: <SignUpPage /> },
					{ path: 'school?', element: <SchoolCertificationPage /> },
					{ path: 'nickname', element: <NicknameSettingPage /> },
				],
			},
			{
				path: 'activity',
				element: <MyActivityWrapper />,
				children: [
					{
						path: 'invited',
						element: <MyActivityInvited />,
					},
					{
						path: 'like',
						element: <MyActivityLike />,
					},
					{
						path: 'apply',
						element: <MyActivityApply />,
					},
					{
						path: 'bookmark',
						element: <MyActivityBookmark />,
					},
				],
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
				path: 'profile/:userId?',
				element: <ProfileDetailsPage />,
			},
			{
				path: 'profile/edit',
				element: <ProfileEditPage />,
			},
			{
				path: 'portfolio/:portfolioId?',
				element: <PortfolioDetailsPage />,
			},
			{
				path: 'portfolio/edit/:portfolioId?',
				element: <PortfolioEditPage />, // 생성 및 편집
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
