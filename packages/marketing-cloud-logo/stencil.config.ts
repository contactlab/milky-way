import type {Config} from '@stencil/core';

export const config: Config = {
  namespace: 'clab-logo',

  outputTargets: [
    {
      /**
       * The dist type is to generate the component(s)
       * as a reusable library that can be self-lazy loading.
       */
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      /**
       * The dist-custom-elements-bundle output target is used to generate custom elements as a single bundle.
       * Even though the output ends up as a "single" bundle, it's generated to ensure components are tree-shakable.
       */
      type: 'dist-custom-elements-bundle'
    }
  ]
};
