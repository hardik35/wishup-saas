const Users = require('../models').Users;

module.exports = {
  async create(req, res) {
    try {
      await Users.create(
        {
          name: req.body.name,
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