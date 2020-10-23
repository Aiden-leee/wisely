module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? process.env.VUE_APP_URL
      : process.env.BASE_URL,
  devServer: {
    overlay: false,
  },
};
