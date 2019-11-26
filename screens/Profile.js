import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
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
                rightComponent={<Text onPress={()=>navigation.navigate('Home')} style={{ color: 'white',fontSize:20}}>X</Text>}
                // rightComponent = {{icon: 'menu', color: 'white', size: 40}}
            />
            <View style={styles.container}>
                <Text>USER NAME: {user.user_name}</Text>
                <Text>FIRST NAME: {user.first_name}</Text>
                <Text>LAST NAME: {user.last_name}</Text>
            </View>
        
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop: 30,
        paddingHorizontal: 50
    }
});

mapStateToProps = (state) => {
    return {
            user: state.user
        }
}

export default connect(mapStateToProps)(withNavigation(Profile));

