import React from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';

const TopHeader = (props) => {
    return(
        <View>
             <Header 
                containerStyle = {{backgroundColor: '#0E82A7', height: 100}}
                centerComponent={{ text: props.headerText, style: { color: '#fff', fontSize: 40, fontWeight: 'bold'} }}
                rightComponent = {{icon: 'menu', color: 'white', size: 40}}
            />
        </View>
    )
}
export default TopHeader;