// Reference: https://create-react-app.dev/docs/proxying-api-requests-in-development/#configuring-the-proxy-manually

module.exports = function (app) {
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
};
