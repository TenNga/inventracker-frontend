import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { setCurrentFolderId, setCurrentFolder } from '../actions';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';

const FolderList = (props) => {

    const handleFolderSelection = () => {
        const folder = props.current_folders.find(folder => folder.id === props.folderInfo.id)
        props.setCurrentFolder(folder.folders);
        props.setCurrentFolderId(props.folderInfo.id)
    }

    return(
        <View style={styles.container}>
            <Image 
                style={{width:100, height: 100, borderRadius: 5}}
                source={{uri: 'https://images.cruisecritic.com/image/128836/a-guide-to-cruise-line-drink-packages_600x400_21.jpg'}}
            />
            <TouchableOpacity onPress={handleFolderSelection}>
            <View style = {styles.description} >
                <Text style = {styles.folderName}>{props.folderInfo.name}</Text>
                <Text style = {styles.folderDes}>Qty: xxx | Sub: {props.folderInfo.folders.length} | $xxx</Text>
            </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        // backgroundColor: 'rgb(223, 228, 232)',
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
        current_folders: state.current_folders
    }
}
export default connect(mapStateToProps, {setCurrentFolderId, setCurrentFolder })(FolderList);