export function readUser(type, responseData) {
    return {
        type: type,
        username: responseData.username,
        firstName: responseData.firstName,
        admin: responseData.admin,
        _id: responseData._id,
    };
}

export function userList(type, responseData) {
    return {
        type: type,
        userData: responseData,
    };
}

export function clearUser(type) {
    return {
        type: type,
    };
}
