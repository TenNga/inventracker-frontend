import React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import { Header } from 'react-native-elements';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';


const Profile = ({user,navigation}) => {
    // console.log("WHOLE STATE ======> ",props)
    return(
        <View style={{flex:1}}>
            <Header 
                containerStyle = {{backgroundColor: '#0E82A7', height: 100}}
                centerComponent={{ text: "Profile", style: { color: '#fff', fontSize: 30, fontWeight: 'bold'} }}
                rightComponent={<Text onPress={()=>navigation.navigate('Menu')} style={{ color: 'white',fontSize:20}}>X</Text>}
                // rightComponent = {{icon: 'menu', color: 'white', size: 40}}
            />
            <View style={styles.container}>
                <Image style={{width: 100, height: 100, borderRadius: 20}} source={{uri: "https://s3.amazonaws.com/kommunicate.io/default-avatar-image.png"}} />
               
                <View style={styles.profileDesc}>
                    <Text style={styles.info}>USER NAME: {user.user_name}</Text>
                    <Text style={styles.info}>FIRST NAME: {user.first_name}</Text>
                    <Text style={styles.info}>LAST NAME: {user.last_name}</Text>
                    <Text style={styles.info}>FOLDERS: XXX</Text>
                    <Text style={styles.info}>PRODUCTS: xx</Text>
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

mapStateToProps = (state) => {
    return {
            user: state.user
        }
}

export default connect(mapStateToProps)(withNavigation(Profile));

