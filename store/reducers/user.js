const initialState = {
    username: 'dahengzhang',
    userage: 20
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return { ...state, username: action.value }
        case 'CHANGE_AGE':
                return { ...state, userage: action.value }
        default:
            return state
    }
}
