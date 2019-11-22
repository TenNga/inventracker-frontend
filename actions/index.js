export function setUser(user) {
    return {type: "SET_USER", payload: user}
}

export function removeUser() {
    return {type: "REMOVE_USER"}
}