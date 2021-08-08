const UsersController = require('../controllers').Users;
const UsersSubscriptionsController = require('../controllers').UsersSubscriptions;

module.exports = (app) => {
  app.post('/user', UsersController.create);
  app.get('/user/:id', UsersController.list);
  app.post('/subscription', UsersSubscriptionsController.create);
  app.get('/subscription/:userId', UsersSubscriptionsController.listAllPlans);
  app.get('/subscription/:userId/:endDate', UsersSubscriptionsController.listActivePlans);
};