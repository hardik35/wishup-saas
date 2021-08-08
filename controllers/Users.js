const Users = require('../models').Users;

module.exports = {
  async create(req, res) {
    try {
      await users.create(
        {
          name: req.body.name,
        }
      );
      return res.status(200);
    }
    catch (e) {
      return res.status(500);
    }
  },
};