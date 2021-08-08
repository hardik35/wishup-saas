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
  async list(req, res) {
    try {
      const user = await Users.findOne({
          where: {
            id: req.params.id,
          }
        }
      );
      return res.status(200).send(user);
    }
    catch (e) {
      console.error(e);
      return res.sendStatus(500);
    }
  },
};