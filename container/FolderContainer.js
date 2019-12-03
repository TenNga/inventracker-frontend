import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import FolderList from '../components/FolderList';
import { setCurrentFolder, setUser } from '../actions';
import { connect } from 'react-redux';
import ProductList from '../components/ProductList';
import { Ionicons } from '@expo/vector-icons';

class FolderContainer extends Component {

    fetchUser = () => {
        fetch("http://localhost:3000/api/v1/users/"+this.props.currentUser.id)
        .then(resp => resp.json())
        .then((user)=>{
            this.props.setUser(user)
            this.props.setCurrentFolder(user.folders.filter(folder => folder.folder_id === this.props.current_folder_id))
        })
    }

    componentDidMount(){
        this.fetchUser()
    }

    render(){
        // console.log("Rendering Landing Page.........")
        // // console.log("Producte Length/Size: ", this.props.parent_folder.products)
        // // console.log("Current Folder ID: ", this.props.current_folder_id)
        // console.log("Current Folders: ", this.props.current_folders.length)
        // // console.log("Current User Infomation=============>: ", this.props.currentUser)
        return(
            <View style={styles.mainFolderContainer}>
                {this.props.current_folders && this.props.current_folders.length? 
                <View>
                    <Text style = {{fontSize: 18, textTransform: 'uppercase'}}>
                         <Ionicons name="ios-folder-open" size={30} color="#0E82A7" />
                        {this.props.parent_folder.name? this.props.parent_folder.name : "Folder"}
                    </Text>
                        <FlatList 
                            data={this.props.current_folders}
                            renderItem={({item}) => <FolderList folderInfo={item} />}
                            keyExtractor={item=>item.id.toString()}
                        /> 
                </View> : null }
                    
                    {this.props.parent_folder.products && this.props.parent_folder.products.length? 
                    <View>
                        <Text style = {{fontSize: 18, textTransform: 'uppercase'}}>
                            <Ionicons name="ios-cube" size={30} color="#0E82A7" />
                            products
                            </Text>
                        <FlatList 
                            data={this.props.parent_folder.products}
                            renderItem = {({item})=> <ProductList product={item} />}
                            keyExtractor = {item => item.id.toString()}
                        />
                    </View> : null }
                    
            </View>
        )
    }
}
const styles = StyleSheet.create({
    mainFolderContainer: {
        flex: 1,
        marginHorizontal: 5
    }
})

mapStateToProps = (state) => {
 return {
     parent_folder: state.parent_folder,
     currentUser: state.user,
     current_folder_id: state.current_folder_id,
     current_folders: state.current_folders
    }
}

export default connect(mapStateToProps, { setCurrentFolder, setUser })(FolderContainer);