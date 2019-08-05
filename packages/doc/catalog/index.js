import React from 'react';
import ReactDOM from 'react-dom';
import {Catalog, pageLoader} from 'catalog';

const pages = [
  {
    path: '/',
    title: 'Welcome',
    content: pageLoader(() => import('./pages/WELCOME.md')),
  },
  {
    title: 'Colors',
    pages: [
      {
        path: '/colors/design',
        title: 'Design',
        content: pageLoader(() => import('./pages/colors/DESIGN.md')),
      },
      {
        path: '/colors/development',
        title: 'Development',
        content: pageLoader(() => import('./pages/colors/DEV.md')),
      },
    ],
  },
  {
    title: 'Elevations',
    pages: [
      {
        path: '/elevations/design',
        title: 'Design',
        content: pageLoader(() => import('./pages/elevations/DESIGN.md')),
      },
      {
        path: '/elevations/development',
        title: 'Development',
        content: pageLoader(() => import('./pages/elevations/DEV.md')),
      },
    ],
  },
  {
    title: 'Illustrations',
    pages: [
      {
        path: '/illustrations/design',
        title: 'Design',
        content: pageLoader(() => import('./pages/illustrations/DESIGN.md')),
      },
      {
        path: '/illustrations/development',
        title: 'Development',
        content: pageLoader(() => import('./pages/illustrations/DEV.md')),
      },
    ],
  },
  {
    title: 'Typography',
    pages: [
      {
        path: '/typography/design',
        title: 'Design',
        content: pageLoader(() => import('./pages/typography/DESIGN.md')),
      },
      {
        path: '/typography/development',
        title: 'Development',
        content: pageLoader(() => import('./pages/typography/DEV.md')),
      },
    ],
  },
];

ReactDOM.render(
  <Catalog title="MILKY-WAY ~ Contactlab Design System" pages={pages} />,
  document.getElementById('design-tokens')
);
