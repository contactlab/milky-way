import {Config} from '@stencil/core';

export const config: Config = {
  namespace: 'giotramu-logo',
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
