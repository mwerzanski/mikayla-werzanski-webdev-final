
const initialState = {
    username: '',
    firstName: '',
    _id: '',
    admin: false,
    userActive: false,
}


const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'READ_USER':
            return {
                username: action.username,
                firstName: action.firstName,
                _id: action._id,
                admin: action.admin,
                userActive: true
            }  
        default:
            return state;
    }
};

export default UserReducer;