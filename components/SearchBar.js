import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

class SearchBar extends Component {
    render(){
        return(
            <View style={styles.searchField}>
                <TextInput 
                    placeholder={"Search Item"}
                    style={styles.input}
                />
                <Text style={styles.search}>Search</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    searchField: {
        flexDirection: 'row'
    },
    input: {
        flex: 2,
        backgroundColor: 'rgb(222, 225, 227)',
        margin: 5
    },
    search: {
        flex: 1
    }
})

export default SearchBar;