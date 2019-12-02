const defaultState = {
    user: "",
    parent_folder: "",
    current_folder_id: null,
    current_folders: [],
    product_qr: "",
    editProduct: "",
    folderProductSearch: false
}

function reducer(prevState = defaultState, action){
    switch(action.type){
        case "SET_USER":
            return {...prevState, user: action.payload }
        case "REMOVE_USER":
            return {...prevState, user: ""}
        case "SET_CURRENT_FOLDER_ID":
            return { ...prevState, current_folder_id: action.payload }
        case "SET_CURRENT_FOLDER":
            return {...prevState, current_folders: action.payload }
        case "SET_PARENT_FOLDER":
            return { ...prevState, parent_folder: action.payload }
        case "UPDATE_CURRENT_FOLDER":
            return { ...prevState, current_folders: [...prevState.current_folders, action.payload]}
        case "UPDATE_PRODUCT":
            return { ...prevState, parent_folder: {...prevState.parent_folder, products: [...prevState.parent_folder.products.filter(p => p.id !==action.payload.id), action.payload]}}
        case "SET_PRODUCT_QR":
            return{...prevState, product_qr: action.payload}
        case "SET_EDIT_PRODUCT":
            return{...prevState, editProduct: action.payload}
        case "SET_FOLDER_PRODUCT_SEARCH":
            return{...prevState, folderProductSearch: action.payload}
        case "CLEAR_STATE":
            return{...prevState,
                user: "",
                parent_folder: "",
                current_folder_id: null,
                current_folders: []
            }
        default:
            return prevState
    }
}
export default reducer 
