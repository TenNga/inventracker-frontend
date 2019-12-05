import React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity, ActivityIndicator } from 'react-native';
import { setCurrentFolderId, setCurrentFolder, setParentFolder, setUser } from '../actions';

import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

const FolderList = (props) => {

    const handleFolderSelection = () => {
        // const folder = props.current_folders.find(folder => folder.id === props.folderInfo.id);
        // console.log("Current Folder:===> ",props.folderInfo.folders )
        props.setCurrentFolder(props.folderInfo.folders);
        props.setParentFolder(props.folderInfo);
        props.setCurrentFolderId(props.folderInfo.id);
        // console.log( "Parent Folder:=-=-=-=-=-> ", props.folderInfo)
    }

    const handleDelete = () => {
        // console.log("before filter size: ", props.current_folders.length);
        const newFolders = props.current_folders.filter(f => f.id !== props.folderInfo.id)
        // console.log("after filter size: ", newFolders.length)
        props.setCurrentFolder(newFolders);
        // console.log("Current Folder==> ", current_folders)
        fetch("http://localhost:3000/api/v1/folders/"+props.folderInfo.id,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            }
        }).then(()=>console.log("After Fetchinging....."))
        
        fetch("http://localhost:3000/api/v1/users/"+props.user.id)
        .then(resp => resp.json())
        .then((user)=>{
            props.setUser(user)
        })
    }

    return(
        
            <View style={styles.container}>
                <Image 
                    style={{width:80, height: 80, borderRadius: 5}}
                    source={{uri: 'https://i2.wp.com/www.vectorico.com/wp-content/uploads/2019/01/folder-icon.png?resize=300%2C300'}}
                />
                <TouchableOpacity style={{flex:1}} onPress={handleFolderSelection}>
                <View style = {styles.description} >
                    <Text style = {styles.folderName}>{props.folderInfo.name}</Text>
                    <Text style = {styles.folderDes}>Sub-Folder: {props.folderInfo.folders.length}</Text>
                </View>
                </TouchableOpacity>
                <View  style={{alignSelf:'flex-start', marginRight: 20}}>
                    <TouchableOpacity onPress={handleDelete}>
                        <Ionicons  name="ios-trash" size={30} color="#0E82A7" />
                    </TouchableOpacity>
                </View>
            </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10
       
    },
    description: {
        flex: 1,
        marginLeft: 10,
        borderTopWidth: 1,
        borderTopColor: 'rgb(223, 228, 232)'
    },
    folderName: {
        fontSize: 20,
        fontWeight: 'bold',
        margin:2
    },
    folderDes: {
        margin: 2
    }
})
mapStateToProps = (state) =>{
    return {
        user: state.user,
        current_folders: state.current_folders,
        parent_folder: state.parent_folder
    }
}
export default connect(mapStateToProps, {setCurrentFolderId, setCurrentFolder, setParentFolder, setUser })(FolderList);