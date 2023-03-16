const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    about: './src/aboutFirebase.js',
    contact: './src/contactFirebase.js',
    createad: './src/createadFirebase.js',
    employer: './src/employerFirebase.js',
    login: './src/loginFirebase.js',
    signup: './src/signupFirebase.js',
    admin: './src/adminFirebase.js',
    index: './src/indexFirebase.js',
    worksearcher: './src/worksearcherFirebase.js',
    favorites: './src/favoritesFirebase.js',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js',
  },
  watch: true,
  experiments: {
    topLevelAwait: true,
  },
}
