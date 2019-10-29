import {pageLoader} from 'catalog';

export const PAGES = [
	{
		path: '/',
		title: 'Welcome',
		content: pageLoader(() => import('./WELCOME.md')),
	},
	{
		title: 'Colors',
		pages: [
			{
				path: '/colors/design',
				title: 'Design',
				content: pageLoader(() => import('./colors/DESIGN.md')),
			},
			{
				path: '/colors/development',
				title: 'Development',
				content: pageLoader(() => import('./colors/DEV.md')),
			},
		],
	},
	{
		title: 'Elevations',
		pages: [
			{
				path: '/elevations/design',
				title: 'Design',
				content: pageLoader(() => import('./elevations/DESIGN.md')),
			},
			{
				path: '/elevations/development',
				title: 'Development',
				content: pageLoader(() => import('./elevations/DEV.md')),
			},
		],
	},
	{
		title: 'Illustrations',
		pages: [
			{
				path: '/illustrations/design',
				title: 'Design',
				content: pageLoader(() => import('./illustrations/DESIGN.md')),
			},
			{
				path: '/illustrations/development',
				title: 'Development',
				content: pageLoader(() => import('./illustrations/DEV.md')),
			},
		],
	},
	{
		title: 'Typography',
		pages: [
			{
				path: '/typography/design',
				title: 'Design',
				content: pageLoader(() => import('./typography/DESIGN.md')),
			},
			{
				path: '/typography/development',
				title: 'Development',
				content: pageLoader(() => import('./typography/DEV.md')),
			},
		],
	},
];
