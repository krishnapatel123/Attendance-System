const passport = require('passport');

const APIError = require('../utils/APIError');
const { toObject, generateJwt, removeFields } = require('../utils/helper');

const USER = require('../models/user');
const ROLE = require('../models/role');

// const ajax=require('../public/js/auth/ajax');
/**
 * User signup
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
// exports.signup = async (req, res, next) => {
//   try{
//     const payload = req.body;
//     const role = await ROLE.findOne({name: new RegExp('user', 'i')}, '_id');
//     if(!role) throw new APIError({message: 'It seems that the system role are not generated yet.'});
//     payload.role = role._id;
//     let user = await USER.create(payload);
//     const body = { _id: user._id, firstName: user.firstName, email: user.email};
//     const token = generateJwt({ user: body });
//     user = toObject(user);
//     user.token = "Bearer "+token;
//     return res.sendJson(200, { data: removeFields(user, ['password', 'role']), message: "Signup done successfully." });
//   }
//   catch(err) { next(err) }
// };

/**
   * Create new USER
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   */
  exports.signup = async (req, res, next) => {
    try {
      const payload = req.body;
      const role = await ROLE.findOne({name: new RegExp('user', 'i')}, '_id');
      if(!role) throw new APIError({message: 'It seems that the system role are not generated yet.'});
      payload.role = role._id;
      const user = await USER.create(payload);
      return res.sendJson(200, removeFields(user.toObject(), ['role', 'password']));
    } catch (error) { next(error); }
  }
/**
 * User login
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.login = async (req, res, next) => {
  passport.authenticate('login', async (err, user, info) => {
    try {
      console.log("In login");
      if (err || !user) throw new APIError({status: 401, message: err ? err.message : 'Unauthorized access'});
        
      req.login(user, { session: false }, async (err) => {
        if (err) throw new APIError();
        const body = { _id: user._id, email: user.email};
        const token = generateJwt({ user: body });
        user = toObject(user);
        user.token = "Bearer "+token;
        return res.sendJson(200, { data: user, message: info.message });
      });

    }
    catch (err) { next(err); }

  })(req, res, next);
};

/**
 * Get all EMPLOYEEs
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
// exports.all = async (req, res, next) => {
//   try {
//     const employees = await EMPLOYEE.find({isDeleted: false}, '-__v -isDeleted -createdAt -updatedAt -deletedAt -deletedBy');
//     return res.sendJson(200, employees);
//   } catch (error) { next(error); }
// }

/**
 * Get EMPLOYEE by given id
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
// exports.show = async (req, res, next) => {
//   try {
//     const _id = req.params.id;
//     const employee = await EMPLOYEE.findOne({_id, isDeleted: false});
//     return res.sendJson(200, removeFields(employee.toObject()));
//   } catch (error) { next(error); }
// }

/**
 * Create new EMPLOYEE
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
// exports.store = async (req, res, next) => {
//   try {
//     const payload = req.body;
//     const role = await ROLE.findOne({name: new RegExp('user', 'i')}, '_id');
//     if(!role) throw new APIError({message: 'It seems that the system role are not generated yet.'});
//     payload.role = role._id;
//     const employee = await EMPLOYEE.create(payload);
//     return res.sendJson(200, removeFields(employee.toObject(), ['role', 'password']));
//   } catch (error) { next(error); }
// }

/**
 * Update EMPLOYEE by given id
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
// exports.update = async (req, res, next) => {
//   try {
//     const _id = req.params.id;
//     const payload = req.body;
//     const _query = {_id, isDeleted: false};
//     const employee = await EMPLOYEE.findOneAndUpdate(_query, {$set: payload}, {new: true});
//     return res.sendJson(200, removeFields(employee.toObject(), ['user', 'comments']));
//   } catch (error) { next(error); }
// }

/**
 * Delete EMPLOYEE by given id
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
// exports.destroy = async (req, res, next) => {
//   try {
//     const _id = req.params.id;
//     const _query = {_id, isDeleted: false};
//     const _delete = {$set: {isDeleted: true}};
//     await EMPLOYEE.findOneAndUpdate(_query, _delete);
//     return res.sendJson(200, "EMPLOYEE deleted successfully");
//   } catch (error) { next(error); }
// }