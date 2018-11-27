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