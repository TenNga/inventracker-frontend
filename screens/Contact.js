import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

const Contact = () => {
    return(
        <View style={{flex:1}}>
            <Header 
                containerStyle = {{backgroundColor: '#0E82A7', height: 100}}
                centerComponent={{ text: "Contact", style: { color: '#fff', fontSize: 30, fontWeight: 'bold'} }}
                rightComponent = {{icon: 'menu', color: 'white', size: 40}}
                />
                <View>
                   <Text>Feed back and Contact info</Text>
                </View>
            
        </View>
    )
}

const styles = StyleSheet.create({});

export default Contact;

