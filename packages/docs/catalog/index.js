import React from 'react';
import ReactDOM from 'react-dom';
import {Catalog} from 'catalog';

import {PAGES} from './pages';
import {THEME} from './config/theme';

ReactDOM.render(
  <Catalog
    title="MILKY-WAY ~ Contactlab Design System"
    logoSrc="/assets/uxd-logo.svg"
    pages={PAGES}
    theme={THEME}
  />,
  document.getElementById('design-tokens')
);
