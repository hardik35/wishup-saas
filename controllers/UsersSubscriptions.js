const UsersSubscriptions = require('../models').UsersSubscriptions;

module.exports = {
  async create(req, res) {
    try {
      await UsersSubscriptions.create(
        {
            userId: 1,
            planId: 1,
            planStartUTC: (new Date()).getTime(),
            planEndUTC: (new Date()).getTime(),
        }
      );
      return res.sendStatus(200);
    }
    catch (e) {
      console.error(e);
      return res.sendStatus(500);
    }
  },
};