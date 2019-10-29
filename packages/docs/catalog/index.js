import React from 'react';
import ReactDOM from 'react-dom';
import {Catalog} from 'catalog';

import {PAGES} from './pages';
import {THEME} from './config/theme';

ReactDOM.render(
	<Catalog
		title="Milky Way"
		logoSrc="/assets/milky-way-logo.svg"
		styles={['/assets/global.css']}
		pages={PAGES}
		theme={THEME}
	/>,
	document.getElementById('design-tokens')
);
