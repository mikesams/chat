const express = require('express');
const userController = require('../controllers/user.controller');
const {isAuth, hasPermission}  = require('../middlewares');

const router = express.Router();

router.post('/create-settings', isAuth, hasPermission('App Settings'), userController.createSettings);
router.get('/get-settings', isAuth, hasPermission('App Settings'), userController.getSettingsByUser);
router.post('/create-package', isAuth, hasPermission('Role Management'), userController.createRole);
router.get('/get-roles', isAuth, hasPermission('Role Management'), userController.getRoles);
router.get('/get-role/:id', isAuth, hasPermission('Role Management'), userController.getRoleById);
router.put('/edit-role', isAuth, hasPermission('Role Management'), userController.editRole);
router.get('/get-themes', isAuth, hasPermission('Customize Widget'), userController.getThemes);
router.get('/get-theme/:id', isAuth, hasPermission('Customize Widget'), userController.getThemeById);
router.put('/edit-theme', isAuth, hasPermission('Customize Widget'), userController.editTheme);
router.post('/create-theme', isAuth, hasPermission('Customize Widget'), userController.createTheme);
router.post('/create-role', isAuth, hasPermission('Role Management'), userController.createRole);
router.put('/mark-role-as-default', isAuth, hasPermission('Role Management'), userController.markRoleAsDefault);
router.get('/get-members', isAuth, hasPermission('Role Management'), userController.getMembers);
router.get('/get-member/:id', isAuth, hasPermission('Role Management'), userController.getMemberById);
router.put('/edit-member', isAuth, hasPermission('Role Management'), userController.editMember);
router.post('/create-member', isAuth, hasPermission('Role Management'), userController.createMember);
router.post('/create-guest', userController.createGuest);
router.get('/get-convs', isAuth, hasPermission('Chat Accessible'), userController.getConvs);


module.exports = router;