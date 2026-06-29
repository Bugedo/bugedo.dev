import '@testing-library/jest-dom';
import { createElement } from 'react';

jest.mock('framer-motion', () => ({
  motion: new Proxy(
    {},
    {
      get: (_target, prop) => {
        if (prop === 'displayName') return undefined;
        return ({ children, ...props }) =>
          createElement(prop === 'div' ? 'div' : String(prop), props, children);
      },
    },
  ),
  useReducedMotion: () => true,
}));
