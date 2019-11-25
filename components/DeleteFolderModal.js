import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Dialog, { DialogContent } from 'react-native-popup-dialog';


class DeleteFolderModal extends Component {

    render(){
        return(
            <View style={styles.container}>
            {console.log("Delete Folder Component")}
            </View>
        ) 
    }
   
}

const styles = StyleSheet.create({});

export default DeleteFolderModal;