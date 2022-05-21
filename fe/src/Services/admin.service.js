import api from "./api";
import TokenService from "./token.service";

const AdminService = {
    getUsers() {
        return api.get("/admin/get-users");
    },
    getUserActions() {
        return api.get("/admin/get-user-actions");
    },
    createPackage(data) {
        return api.post("/admin/create-package", data);
    },
    getPackages() {
        return api.get("/admin/get-packages");
    },
    getPackageById(id) {
        return api.get(`/admin/get-package/${id}`);
    },
    editPackage(data) {
        return api.put("/admin/edit-package", data);
    },
    markPackageAsDefualt(data) {
        return api.put("/admin/mark-package-as-default", data);
    },
}

export default AdminService;