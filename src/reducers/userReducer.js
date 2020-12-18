const initialState = {
    username: '',
    firstName: '',
    _id: '',
    admin: false,
    userActive: false,
    userList: [],
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'READ_USER':
            return {
                ...state,
                username: action.username,
                firstName: action.firstName,
                _id: action._id,
                admin: action.admin,
                userActive: true,
            };
        case 'USER_LIST':
            return {
                ...state,
                userList: action.userData,
            };
        case 'CLEAR_USER_DATA':
            return {
                username: '',
                firstName: '',
                _id: '',
                admin: false,
                userActive: false,
                userList: [],
            };
        default:
            return state;
    }
};

export default UserReducer;
