export function createAssignment(type, username, admin, id) {
    return {
        type: type,
        username: username,
        admin: admin,
        userId: id
    }
};