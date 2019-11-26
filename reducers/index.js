const defaultState = {
    user: "",
    parent_folder: "",
    current_folder_id: null,
    current_folders: []
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
            return { ...prevState, parent_folder: {...prevState.parent_folder, products: [...prevState.parent_folder.products, action.payload]}}
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
