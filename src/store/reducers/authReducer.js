const initState = {
    users: [],
    activeUser: null,
    signInError: null
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
        case 'SIGN_IN':
            console.log('signing in')
            const jsonList = []
            state.users.forEach(obj => {
                jsonList.push(JSON.stringify(obj))
            })
            const signInResult = jsonList.includes(JSON.stringify(action.user))
            console.log(jsonList)
            console.log('Sign in result', signInResult)
            return(
                signInResult ? ({
                    ...state,
                    activeUser: action.user,
                    signInError: null
                }) : ({
                    ...state,
                    signInError: 'Error while signing in'
                })
            )
        default:
            return state
    }
}

export default authReducer

