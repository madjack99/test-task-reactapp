const initState = {
    users: [],
    activeUser: null
}

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case 'SIGN_UP':
            console.log('signing up', state)
            return ({
                ...state,
                users: [...state.users, action.user],
                activeUser: action.user
            })
        case 'LOG_OUT':
            console.log('loggin out')
            return ({
                ...state,
                activeUser: null
            })
        default:
            return state
    }
}

export default authReducer

