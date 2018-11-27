export const signUp = (user) => {
    return {
        type: "SIGN_UP",
        user
    }
}

export const logOut = () => {
    return {
        type: "LOG_OUT"
    }
}

export const signIn = (user) => {
    return {
        type: "SIGN_IN",
        user
    }
}