export function addItemToUserList(type, title) {
    return {
        type: type,
        title: title,
    };
}

export function removeItemToUserList(type, title) {
    return {
        type: type,
        title: title,
    };
}

export function addMenuItem(type, menuItem) {
    return {
        type: type,
        menuItem: menuItem,
    };
}

export function setMenuItems(type, menuItems) {
    return {
        type: type,
        menuItems: menuItems,
    };
}

export function deleteMenuItem(type, menuItem) {
    return {
        type: type,
        menuItem: menuItem,
    };
}

export function updateMenuItem(type, title, text) {
    return {
        type: type,
        title: title,
        text: text,
    };
}
