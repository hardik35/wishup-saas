const UsersController = require('../controllers').Users;

module.exports = (app) => {
  app.post('/user', UsersController.create);
  app.get('/user/:id', UsersController.list);
};