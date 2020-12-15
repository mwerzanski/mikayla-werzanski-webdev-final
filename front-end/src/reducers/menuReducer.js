
const initialState = {
    menuItems: []
}


const MenuReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_MENU_ITEM':
            return {
                menuItems: menuItems.push(action.menuIteme)
            }  
        default:
            return state;
    }
};

export default MenuReducer;