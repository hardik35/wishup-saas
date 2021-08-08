const UsersController = require('../controllers').Users;

module.exports = (app) => {
  app.post('/user', UsersController.create);
};