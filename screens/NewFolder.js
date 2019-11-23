import React from 'react';
import {Text, View, Image, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

const NewFolder = (props) => {
    return(
        <View>
            <Header 
            containerStyle = {{backgroundColor: '#0E82A7', height: 100}}
            leftComponent = {randerBack(props)}
            centerComponent={{ text: "New Folder", style: { color: '#fff', fontSize: 30, fontWeight: 'bold'} }}
            rightComponent = {{icon: 'menu', color: 'white', size: 40}}
             />
        </View>
    )
}

randerBack = (props) => {
    return(
        <View>
            <Text onPress={()=>props.navigation.navigate('Home')} style={{ color: '#fff', fontSize: 20}}>Back</Text>
        </View>
    )
}


const styles = StyleSheet.create({});

export default withNavigation(NewFolder);