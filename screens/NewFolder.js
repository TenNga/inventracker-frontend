import React, { Component } from 'react';
import {Text, 
    View, 
    Image, 
    StyleSheet, 
    TextInput, 
    Button,
    Alert
} from 'react-native';
import { Header } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import { updateCurrentFolder, setUser } from '../actions';
import { connect } from 'react-redux';

class NewFolder extends Component {
    state ={
        name: "",
        folder_id: this.props.folder_id,
        user_id: this.props.user_id
    }
    handleChange = (value) => {
        this.setState({name: value})
    }
    randerBack = () => {
        return(
            <View>
                <Text onPress={()=>this.props.navigation.navigate('Home')} style={{ color: '#fff', fontSize: 20}}>Back</Text>
            </View>
        )
    }

    handleSave = () => {
            fetch("https://arcane-wildwood-85713.herokuapp.com/api/v1/folders",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accepts": "application/json"
                },
                body: JSON.stringify(this.state)
            })
            .then(res => res.json())
            .then(folder => this.props.updateCurrentFolder(folder))
            .then(()=>this.props.navigation.navigate('Home'))

            fetch("https://arcane-wildwood-85713.herokuapp.com/api/v1/users/"+this.props.user.id)
            .then(resp => resp.json())
            .then((user)=>{
                this.props.setUser(user)
            })
    }
    render(){
        return(
            <View>
                <Header 
                containerStyle = {{backgroundColor: '#0E82A7', height: 100}}
                leftComponent = {this.randerBack}
                centerComponent={{ text: "New Folder", style: { color: '#fff', fontSize: 30, fontWeight: 'bold'} }}
                rightComponent = {{icon: 'menu', color: 'white', size: 40}}
                />
                <View>
                    <Text>Folder name</Text>
                    <TextInput 
                        placeholder="Folder Name" 
                        onChangeText={this.handleChange} 
                        value={this.state.name}
                        style={styles.input}
                    />
                    <Button title="Save" onPress={this.handleSave} />
                </View>
            </View>
        )
    }
}//Class

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'rgb(242, 246, 247)',
        paddingLeft: 5,
        marginVertical: 10,
        height: 35,
        borderRadius: 5
    },
})

const mapStateToProps = (state) => {
    return{
        user: state.user,
        folder_id: state.current_folder_id,
        user_id: state.user.id,
        current_folders: state.current_folders
    }
}


export default connect(mapStateToProps, {updateCurrentFolder,setUser})(withNavigation(NewFolder));