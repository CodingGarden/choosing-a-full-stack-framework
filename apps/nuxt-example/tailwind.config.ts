import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  // eslint-disable-next-line global-require
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        black: {
          primary: '#1EB854',
          secondary: '#1FD65F',
          accent: '#D99330',
          neutral: '#110E0E',
          'base-100': '#000',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
      },
    ],
  },
};
