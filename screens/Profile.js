import React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import { Header } from 'react-native-elements';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

const Profile = ({user,navigation}) => {
   let folderCount;

    console.log('FOLDER SIZE:===> ',folderCount)
    return(
        <View style={{flex:1}}>
            <Header 
                containerStyle = {{backgroundColor: '#0E82A7', height: 100}}
                centerComponent={{ text: "Profile", style: { color: '#fff', fontSize: 30, fontWeight: 'bold'} }}
                // rightComponent={<Text onPress={()=>navigation.navigate('Menu')} style={{ color: 'white',fontSize:20}}>X</Text>}
                rightComponent={<Text onPress={()=>navigation.navigate('Home')}><Ionicons  name="ios-close-circle-outline" size={30} color="white" /></Text>}
                // rightComponent = {{icon: 'menu', color: 'white', size: 40}}
            />
            <View style={styles.container}>
                <Image style={{width: 100, height: 100, borderRadius: 20}} source={{uri: "https://s3.amazonaws.com/kommunicate.io/default-avatar-image.png"}} />
               </View>
                <View style={styles.profileDesc}>
                    <Text style={styles.info}>USER NAME: {user.user_name}</Text>
                    <Text style={styles.info}>FIRST NAME: {user.first_name}</Text>
                    <Text style={styles.info}>LAST NAME: {user.last_name}</Text>
                    <Text style={styles.info}>FOLDERS: {user.folders.length}</Text>
                    <Text style={styles.info}>PRODUCTS: xx</Text>
                </View>
                
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
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
        paddingHorizontal: 50,
        backgroundColor: 'rgba(12, 130, 167, 0.8)'
    },
    profileDesc: {
        flex:3,
        marginTop: 20,
        marginHorizontal: 30,
        alignSelf: 'stretch',
        justifyContent: 'flex-start'
    },
    info: {
        height: 50,
        textAlign: 'left',
        textAlignVertical: 'center',
        paddingLeft: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 15,
        backgroundColor: 'rgba(12, 130, 167, 0.8)',
        borderRadius: 10
        
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

mapStateToProps = (state) => {
    return {
            user: state.user
        }
}

export default connect(mapStateToProps)(withNavigation(Profile));

