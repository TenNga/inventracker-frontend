import React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity, Modal } from 'react-native';
import { setCurrentFolderId, setCurrentFolder, setParentFolder } from '../actions';
import DeleteFolderModal from './DeleteFolderModal'
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

const FolderList = (props) => {

    const handleFolderSelection = () => {
        // const folder = props.current_folders.find(folder => folder.id === props.folderInfo.id);
        props.setCurrentFolder(props.folderInfo.folders);
        props.setParentFolder(props.folderInfo);
        props.setCurrentFolderId(props.folderInfo.id);
        // console.log( "Parent Folder:=-=-=-=-=-> ", props.folderInfo)
    }

    const handleDelete = () => {
        const newFolders = props.current_folders.filter(f => f.id !== props.folderInfo.id)
        props.setCurrentFolder(newFolders);
        fetch("http://10.0.2.2:3000/api/v1/folders/"+props.folderInfo.id,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            }
        }).then(()=>console.log("After Fetchinging....."))
        
    }

    return(
        <View style={styles.container}>
            <Image 
                style={{width:100, height: 100, borderRadius: 5}}
                source={{uri: 'https://images.cruisecritic.com/image/128836/a-guide-to-cruise-line-drink-packages_600x400_21.jpg'}}
            />
            <TouchableOpacity style={{flex:1}} onPress={handleFolderSelection}>
            <View style = {styles.description} >
                <Text style = {styles.folderName}>{props.folderInfo.name}</Text>
                <Text style = {styles.folderDes}>Qty: xxx | Sub: {props.folderInfo.folders.length} | $xxx</Text>
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
        fontWeight: 'bold',
        margin:2
    },
    folderDes: {
        margin: 2
    }
})
mapStateToProps = (state) =>{
    return {
        current_folders: state.current_folders,
        parent_folder: state.parent_folder
    }
}
export default connect(mapStateToProps, {setCurrentFolderId, setCurrentFolder, setParentFolder })(FolderList);