import React from 'react';
import { Text, View, StyleSheet, ImageBackground} from 'react-native';
import { Header } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import { clearState } from '../actions';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { Transition } from 'react-native-reanimated';

const Contact = (props) => {
    return(
        <View style={{flex:1}}>
            <Header 
                containerStyle = {{backgroundColor: '#0E82A7', height: 100}}
                centerComponent={{ text: "Menu", style: { color: '#fff', fontSize: 30, fontWeight: 'bold'} }}
                rightComponent = {<Text onPress={()=>props.navigation.navigate('Home')}><Ionicons  name="ios-arrow-forward" size={30} color="white" /></Text>}
                />
                 <ImageBackground source={require('../assets/menu_bg.png')} style={{width: '100%', height: '70%'}}>

                <View style={styles.container}>
                    <Text onPress={()=>props.navigation.navigate('Profile')} style={styles.menuText}>
                        PROFILE
                    </Text>
                    <Text onPress={()=>props.navigation.navigate('Contact')} style={styles.menuText}>
                        CONTACT
                    </Text>
                    <Text onPress={()=>{
                            props.clearState();
                            props.navigation.navigate('Login')
                        }}style={styles.menuText}>LOG OUT</Text>
                </View>
                </ImageBackground>
                <View style = {styles.footer}>
                    <Text style={{flex:1,textAlign: 'center',marginVertical: 30, color: 'white'}}>
                        Flatiron Scool - InvenTracker 2019
                    </Text>
                </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    menuText: {
        textAlign: 'center',
        alignSelf: 'stretch',
        justifyContent: 'flex-start',
        paddingBottom: 10,
        color: 'white',
        fontSize: 30,
        marginVertical: 20
    },
    footer: {
        position: 'absolute',
        height: 80,
        backgroundColor: '#0E82A7',
        left: 0,
        right: 0,
        bottom: 0
    }
});

export default connect(null,{clearState})(withNavigation(Contact));

