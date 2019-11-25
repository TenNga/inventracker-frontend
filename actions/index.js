export function setUser(user) {
    return {type: "SET_USER", payload: user}
}

export function setCurrentFolderId(id){
    return {type: "SET_CURRENT_FOLDER_ID", payload: id}
}

export function removeUser() {
    return {type: "REMOVE_USER"}
}

export function setCurrentFolder(folders){
    return {type: "SET_CURRENT_FOLDER", payload: folders}
}
export function setParentFolder(folder){
    return { type: "SET_PARENT_FOLDER", payload: folder}
}
export function updateCurrentFolder(folder) {
    return{ type: "UPDATE_CURRENT_FOLDER", payload: folder}
}