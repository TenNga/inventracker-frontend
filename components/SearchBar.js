import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { setCurrentFolder } from '../actions'

class SearchBar extends Component {
    state = { 
        term: "",
        result: ""
    }
    handleChange = (term) => {
        this.setState({term})
    }

    handleSubmit = () =>{
        fetch("http://localhost:3000/api/v1/folders")
        .then(res => res.json())
        .then((folders)=>{
            const match = folders.filter(f => f.name.includes(this.state.term))
            this.props.setCurrentFolder(match)
        })
      
    }

    render(){
        return(
            <View style={styles.searchField}>
                <View style={styles.input}>
                     <Ionicons name="md-search" size={32} color="white" style={styles.searchIcon} />
                    <TextInput
                        placeholder={"Search Folder"}
                        onChangeText={this.handleChange}
                        value={this.state.term}
                        onSubmitEditing = {this.handleSubmit}
                        style={{flex:1}}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    searchIcon: {
        alignSelf: 'center', 
        borderRightColor: 'white', 
        borderRightWidth: 2,
        paddingRight: 6,
        marginRight: 10
    },
    searchField: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    input: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'center',
        backgroundColor: 'rgb(222, 225, 227)',
        height:40,
        margin: 20,
        paddingHorizontal: 10,
        borderRadius: 10
    }
})

mapStateToProps = (state) => {
    return {
        allFolders: state.user.folders
    }
}

export default connect(mapStateToProps, { setCurrentFolder})(SearchBar);