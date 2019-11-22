const defaultState = {
    user: "",
    current_folder_id: null,
    current_folders: []

}

function reducer(prevState = defaultState, action){
    switch(action.type){
        case "SET_USER":
            return {...prevState, user: action.payload}
        case "REMOVE_USER":
            return {...prevState, user: ""}
        case "SET_CURRENT_FOLDER_ID":
            return { ...prevState, current_folder_id: action.payload}
        case "SET_CURRENT_FOLDER":
            return {...prevState, current_folders: action.payload}
        default:
            return prevState
    }
}
export default reducer 
