const UsersSubscriptions = require('../models').UsersSubscriptions;
const Users = require('../models').Users;
const Plans = require('../models').Plans;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


module.exports = {
  async create(req, res) {
    try {
      // ideally this should all be dealt in UTC times to maintain consistency
      const planStartDate = req.body.startDate;
      const planStartDateUTC = new Date(planStartDate).getTime();
      const planDetails = await Plans.findOne({
        where: {
          id: req.body.planId,
        }
      });
      const planDaysValidity = planDetails.daysValidity;
      // converted days to millisecond and added the same to startDate to get lastDate
      const planEndDateUTC = (planDaysValidity * 24 * 60 * 60 * 1000) + planStartDateUTC;
      await UsersSubscriptions.create(
        {
            userId: req.body.userId,
            planId: req.body.planId,
            planStartUTC: planStartDateUTC,
            planEndUTC: planEndDateUTC,
        }
      );
      return res.status(200).send({
        userId: req.body.userId,
        planId: req.body.planId,
        startDate: planStartDate,
      });
    }
    catch (e) {
      console.error(e);
      return res.sendStatus(500);
    }
  },
  async listAllPlans(req, res) {
    try {
      const allPlans = await UsersSubscriptions.findAll(
        {
          where: {
            userId: req.params.userId,
          },
          attributes: ["id", "userId", "planId", "planStartUTC", "planEndUTC"]
        }
      );
      return res.status(200).send(allPlans);
    }
    catch (e) {
      console.error(e);
      return res.sendStatus(500);
    }
  },
  async listActivePlans(req, res) {
    try {
      const validTillDateToUTC = new Date(req.params.endDate).getTime();
      const activePlans = await UsersSubscriptions.findAll(
        {
          where: {
            userId: req.params.userId,
            planEndUTC: {
              [Op.gt]: validTillDateToUTC,
            },
            planStartUTC: {
              [Op.lt]: validTillDateToUTC,
            }
          },
          attributes: ["id", "userId", "planId", "planStartUTC", "planEndUTC"]
        }
      );
      return res.status(200).send(activePlans);
    }
    catch (e) {
      console.error(e);
      return res.sendStatus(500);
    }
  },
};