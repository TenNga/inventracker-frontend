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
export function updateCurrentProduct(product) {
    return { type: "UPDATE_PRODUCT", payload: product}
}
export function setProductQr(id){
    return { type: "SET_PRODUCT_QR", payload: id}
}
export function setEditProduct(product){
    return { type: "SET_EDIT_PRODUCT", payload: product}
}
export function setFolderProductSearch(value){
    return { type: "SET_FOLDER_PRODUCT_SEARCH", payload: value}
}
export function clearState(){
    return{ type: "CLEAR_STATE"}
}