module.exports = {
  stories: ['./*.stories.js'],
  addons: [
    '@storybook/addon-storysource',
    '@storybook/addon-webpack5-compiler-babel',
    '@chromatic-com/storybook'
  ],

  docs: {
    autodocs: true
  },

  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
}
