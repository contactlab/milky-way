import React from 'react';
import ReactDOM from 'react-dom';
import {Catalog} from 'catalog';

import {PAGES} from './pages';

ReactDOM.render(
  <Catalog
    title="MILKY-WAY ~ Contactlab Design System"
    logoSrc="/theme/uxd-logo.svg"
    pages={PAGES}
  />,
  document.getElementById('design-tokens')
);
