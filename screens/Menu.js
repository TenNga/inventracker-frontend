import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { Header } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import { clearState } from '../actions';
import { connect } from 'react-redux'

const Contact = (props) => {
    return(
        <View style={{flex:1}}>
            <Header 
                containerStyle = {{backgroundColor: '#0E82A7', height: 100}}
                centerComponent={{ text: "Menu", style: { color: '#fff', fontSize: 30, fontWeight: 'bold'} }}
                rightComponent = {{icon: 'menu', color: 'white', size: 40}}
                />
                <View style={styles.container}>
                    <Text onPress={()=>props.navigation.navigate('Profile')} style={styles.menuText}>PROFILE</Text>
                    <Text onPress={()=>props.navigation.navigate('Contact')} style={styles.menuText}>CONTACT</Text>
                    <Text onPress={()=>{
                            props.clearState();
                            props.navigation.navigate('Login')
                        }}style={styles.menuText}>LOG OUT</Text>
                </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#0E82A7',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    menuText: {
        color: 'black',
        fontSize: 30,
        marginVertical: 20
    }
});

export default connect(null,{clearState})(withNavigation(Contact));

