module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        browsers: ["last 2 versions", "> 1%", "IE 10", "not dead"],
        node: 'current'
      }
    }]
  ],
};
