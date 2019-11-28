import React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import { Header } from 'react-native-elements';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

const Contact = ({navigation}) => {
    // console.log("WHOLE STATE ======> ",props)
    return(
        <View style={{flex:1}}>
            <Header 
                containerStyle = {{backgroundColor: '#0E82A7', height: 100}}
                centerComponent={{ text: "Contact", style: { color: '#fff', fontSize: 30, fontWeight: 'bold'} }}
                rightComponent={<Text onPress={()=>navigation.navigate('Home')}><Ionicons  name="ios-close-circle-outline" size={30} color="white" /></Text>}
                // rightComponent = {{icon: 'menu', color: 'white', size: 40}}
            />
            <View style={styles.container}>
                <Image style={{width: 100, height: 100, borderRadius: 20}} source={{uri: "https://carlisletheacarlisletheatre.org/images/contact-icon-6.jpg"}} />
               
                <View style={styles.profileDesc}>
                    <Text style={styles.info}>Developer: Kevin Karma</Text>
                    <Text style={styles.info}>Application: Inventracker</Text>
                    <Text style={styles.info}>Website: Inventracker.com</Text>
                    
                </View>
                
            </View>
        
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
        paddingHorizontal: 50,
        backgroundColor: 'rgba(12, 130, 167, 0.8)'
    },
    profileDesc: {
        flex:1,
        marginTop: 20
    },
    info: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 5
    }
});

export default connect()(withNavigation(Contact));

