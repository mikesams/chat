const express = require('express');
const adminController = require('../controllers/admin.controller');
const {isAuth, hasPermission}  = require('../middlewares');

const router = express.Router();

router.get('/get-users', isAuth, hasPermission('User Management'), adminController.getUsers);
router.get('/get-user-actions', isAuth, hasPermission('Package Management'), adminController.getUserActions);
router.post('/create-package', isAuth, hasPermission('Package Management'), adminController.createPackage);
router.get('/get-packages', isAuth, hasPermission('Package Management'), adminController.getPackages);
router.get('/get-package/:id', isAuth, hasPermission('Package Management'), adminController.getPackageById);
router.put('/edit-package', isAuth, hasPermission('Package Management'), adminController.editPackage);
router.put('/mark-package-as-default', isAuth, hasPermission('Package Management'), adminController.markPackageAsDefault);

module.exports = router;