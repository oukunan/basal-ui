module.exports = {
  presets: [
    '@babel/preset-typescript',
    // Reference: https://stackoverflow.com/questions/32070303/uncaught-referenceerror-react-is-not-defined
    ['@babel/preset-react', { runtime: 'automatic' }],
    [
      '@babel/preset-env',
      {
        modules: false,
        loose: true
      }
    ]
  ]
}
