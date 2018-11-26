const initState = {
    users: []
}

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case 'SIGN_UP':
            console.log('signing up')
            return ({
                users: [...state.users, action.user]
            })
        default:
            return state
    }
}

export default authReducer

