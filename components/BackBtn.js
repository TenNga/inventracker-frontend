import React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import { setCurrentFolder, setParentFolder, setCurrentFolderId } from '../actions';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';



const BackBtn = (props) => {
    return (
        <View style={{flex: 1}}>
            <TouchableOpacity onPress={()=>handleBack(props)}>
                <View style={styles.backBtn}>
                    <Ionicons name="md-arrow-round-back" size={30} color="white" />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const handleBack = (props) => {
    let parentFolder;
    if(props.parent_folder.folder_id){
        parentFolder = props.user_folders.find(f => f.id === props.parent_folder.folder_id)
        props.setCurrentFolder(parentFolder.folders)
        props.setParentFolder(parentFolder);
        props.setCurrentFolderId(parentFolder.id);
    }
    else {
        props.setCurrentFolder(props.user.folders.filter(f => f.folder_id === null))
        props.setParentFolder("");
        props.setCurrentFolderId(null);
    }
    
}

const styles = StyleSheet.create({
    backBtn: {
        flex:1,
        alignSelf: 'center',
        justifyContent: 'center',
    }
})

mapStateToProps = (state) => {
    return{
        user: state.user,
        parent_folder: state.parent_folder,
        parent_folderID: state.current_folder_id,
        current_folder: state.current_folders,
        user_folders: state.user.folders
    }
}
export default connect(mapStateToProps, { setCurrentFolder, setParentFolder, setCurrentFolderId})(BackBtn);