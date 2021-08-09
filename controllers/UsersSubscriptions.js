const UsersSubscriptions = require('../models').UsersSubscriptions;
const Users = require('../models').Users;
const Plans = require('../models').Plans;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { QueryTypes } = require('sequelize');
const db = require('../models/index')


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
      const userId = req.params.userId;
      const allPlans = await db.sequelize.query(`SELECT "UsersSubscriptions"."userId", "UsersSubscriptions"."planId", "UsersSubscriptions"."planStartUTC", "UsersSubscriptions"."planEndUTC", "Plans"."name" AS "planName", "Users"."name" AS "userName" FROM "public"."UsersSubscriptions" INNER JOIN "public"."Plans" ON  "UsersSubscriptions"."planId" = "Plans"."id" AND "UsersSubscriptions"."userId" = ${userId} INNER JOIN "public"."Users" ON "Users"."id" = ${userId}`, { type: QueryTypes.SELECT });
      return res.status(200).send(allPlans);
    }
    catch (e) {
      console.error(e);
      return res.sendStatus(500);
    }
  },
  async listActivePlans(req, res) {
    try {
      const userId = req.params.userId;
      const validTillDateToUTC = new Date(req.params.endDate).getTime();
      const activePlans = await db.sequelize.query(`SELECT "UsersSubscriptions"."userId", "UsersSubscriptions"."planId", "UsersSubscriptions"."planStartUTC", "UsersSubscriptions"."planEndUTC", "Plans"."name" AS "planName", "Users"."name" AS "userName" FROM "public"."UsersSubscriptions" INNER JOIN "public"."Plans" ON  "UsersSubscriptions"."planId" = "Plans"."id" AND "UsersSubscriptions"."userId" = ${userId} AND "UsersSubscriptions"."planStartUTC" < ${validTillDateToUTC} AND "UsersSubscriptions"."planEndUTC" > ${validTillDateToUTC} INNER JOIN "public"."Users" ON "Users"."id" = ${userId}`, { type: QueryTypes.SELECT });
      return res.status(200).send(activePlans);
    }
    catch (e) {
      console.error(e);
      return res.sendStatus(500);
    }
  },
};