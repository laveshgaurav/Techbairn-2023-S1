// const checkUser = (req, res, next) => {
//   console.log("In the middleware func");
//   next();
// };

module.exports = function (req, res, next) {
  console.log("In the middleware");
  next();
};
