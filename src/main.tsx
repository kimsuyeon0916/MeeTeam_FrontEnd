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
	MyActivityLike,
	SignInPage,
	SchoolCertificationPage,
	NickNameSettingPage,
	SignUpPage,
	PassWordFindingPage,
	OutputPreviewPage,
	MyActivityWrapper,
	MyActivityInvited,
	MyActivityApply,
	MyActivityBookmark,
	SearchResultPage,
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
				path: 'search',
				element: <SearchResultPage />,
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
				path: 'create/output/preview', // meeteam 이름 또는 id
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
