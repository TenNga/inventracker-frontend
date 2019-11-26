import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class SearchBar extends Component {
    state = { 
        term: ""
    }
    handleChange = (term) => {
        this.setState({term})
    }
    render(){
        return(
            <View style={styles.searchField}>
                <View style={styles.input}>
                     <Ionicons name="md-search" size={32} color="white" style={styles.searchIcon} />
                    <TextInput
                        placeholder={"Search Item"}
                        onChangeText={this.handleChange}
                        value={this.state.term}
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

export default SearchBar;