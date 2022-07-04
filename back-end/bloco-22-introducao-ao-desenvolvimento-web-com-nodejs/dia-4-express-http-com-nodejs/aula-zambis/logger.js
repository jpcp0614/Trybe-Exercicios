//* Logger
function logger (req, _res, next) {
  console.log(`Requisition: ${req.method} - ${req.path}`);
  next();
};

module.exports = logger;