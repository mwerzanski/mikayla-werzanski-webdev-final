const initialState = {
    menuItems: [],
    title: '',
    text: '',
    titles: [],
};

const MenuReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_MENU_ITEM':
            return {
                ...state,
                menuItems: state.menuItems.push(action.menuItems),
            };
        case 'SET_MENU_ITEMS':
            return {
                ...state,
                menuItems: action.menuItems,
            };
        case 'UPDATE_MENU_ITEM':
            return {
                ...state,
                title: action.title,
                text: action.text,
            };
        case 'ADD_ITEM_USERLIST':
            state.titles.push(action.title);
            return state;
        case 'REMOVE_ITEM_USERLIST':
            if (state.titles.length === 0) {
                return state;
            } else {
                state.titles = state.titles.filter(
                    subIndex => subIndex !== action.title
                );
                return state;
            }
        default:
            return state;
    }
};

export default MenuReducer;
