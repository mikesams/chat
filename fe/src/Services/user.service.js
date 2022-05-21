import api from './api';

const UserService = {
    
    getSettings() {
        return api.get("/user/get-settings");
    },
    createSettings(data) {
        return api.post("/user/create-settings", data);
    },
    getRoles() {
        return api.get("/user/get-roles");
    },
    getRoleById(id) {
        return api.get(`/user/get-role/${id}`);
    },
    createRole(data) {
        return api.post("/user/create-role", data);
    },
    editRole(data) {
        return api.put("/user/edit-role", data);
    },
    markRoleAsDefualt(data) {
        return api.put("/user/mark-role-as-default", data);
    },
    createTheme(data) {
        return api.post("/user/create-theme", data);
    },
    editTheme(data) {
        return api.put("/user/edit-theme", data);
    },
    getThemeById(id) {
        return api.get(`/user/get-theme/${id}`);
    },
    getThemes() {
        return api.get("/user/get-themes");
    },

    createMember(data) {
        return api.post("/user/create-member", data);
    },
    editMember(data) {
        return api.put("/user/edit-member", data);
    },
    getMemberById(id) {
        return api.get(`/user/get-member/${id}`);
    },
    getMembers() {
        return api.get("/user/get-members");
    },
    getConvs() {
        return api.get(`/user/get-convs`);
    },
}

export default UserService;