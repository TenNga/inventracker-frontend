import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import FolderList from '../components/FolderList';
import { setCurrentFolder, setUser } from '../actions';
import { connect } from 'react-redux';

class FolderContainer extends Component {

    componentDidMount(){
        fetch("http://10.0.2.2:3000/api/v1/users/"+this.props.currentUser.id)
        .then(resp => resp.json())
        .then((user)=>{
            this.props.setUser(user)
            this.props.setCurrentFolder(user.folders.filter(folder => folder.folder_id === this.props.current_folder_id))
        })
    }

    render(){
        console.log("Current Folder ID: ", this.props.current_folder_id)
        console.log("Current Folders: ", this.props.current_folders)
        console.log("Current User Infomation=============>: ", this.props.currentUser)
        return(
            <View style={styles.mainFolderContainer}>
                <Text style = {{fontSize: 18, textTransform: 'uppercase'}}>Folder</Text>
                    <FlatList 
                        data={this.props.current_folders}
                        renderItem={({item}) => <FolderList folderInfo={item} />}
                        keyExtractor={item=>item.id.toString()}
                    /> 
            </View>
        )
    }
}
const styles = StyleSheet.create({
    mainFolderContainer: {
        flex: 1,
        marginHorizontal: 15
    }
})

mapStateToProps = (state) => {
 return {
     currentUser: state.user,
     current_folder_id: state.current_folder_id,
     current_folders: state.current_folders
    }
}

export default connect(mapStateToProps, { setCurrentFolder, setUser })(FolderContainer);