const express = require('express');
const authRoute = require('./auth.route');
const adminRoute = require('./admin.route');
const userRoute = require('./user.route');
const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/admin',
    route: adminRoute
  },
  {
    path: '/user',
    route: userRoute
  }
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;