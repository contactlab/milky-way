import {Config} from '@stencil/core';

export const config: Config = {
  namespace: 'clab-mc-logo',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
