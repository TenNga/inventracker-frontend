import React, {Component} from 'react';
import { 
    Text, 
    View, 
    StyleSheet, 
    TextInput, 
    Alert,
    ImageBackground,
    TouchableOpacity} from 'react-native';
import { setUser } from '../actions';
import { connect } from 'react-redux';
import { Header } from 'react-native-elements';

class Login extends Component {
    state = {
        user_name: "",
        password: ""
    }

    handleUsername = (text) => {
        this.setState({user_name: text})
    }
    handlePassword = (text) => {
        this.setState({password: text})
    }

    handleLogin = () => {
        fetch("https://arcane-wildwood-85713.herokuapp.com/api/v1/login",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(this.state)
        })
        .then(res => res.json())
        .then(this.handleResponse)
        
    }
    handleResponse = (resp) => {
        if(resp.errors)
            Alert.alert("Error",resp.errors)
        else{
            // console.log("User Info after Fetch:=======> ,", resp)
            this.props.setUser(resp)
            this.props.navigation.navigate('Home')
        }
    this.setState({user_name: "", password: ""})
    }

    render(){
        return(
            <View style={styles.container}>
                <ImageBackground 
                    source={require('../assets/Background.png')} 
                    style={{position: 'absolute', top: 0, right: 0,bottom: 0, left: 0}}>
            <Header 
            containerStyle = {{backgroundColor: 'rgb(93, 180, 227)'}}
            centerComponent={{ text: 'Welcome', style: { color: '#fff', fontSize: 30} }}
            />
            <View style={styles.formContainer}>
                <Text style={{ textAlign: 'center',fontSize: 50,fontWeight: 'bold', color: 'white'}}>InvenTracker</Text>
                <Text style={{ textAlign: 'center',fontSize: 18, color: 'white'}}>Made Inventory Simple And Easy</Text>
                <View style={styles.userInfo}>
                    <Text style={{  fontSize: 23, color: 'white' }}>User Info</Text>
                </View>
                <TextInput 
                    placeholder="User Name" 
                    onChangeText={this.handleUsername} 
                    value={this.state.user_name}
                    style={styles.input}
                />
                <TextInput 
                    placeholder="Password" 
                    onChangeText={this.handlePassword} 
                    value={this.state.password}
                    secureTextEntry 
                    style={styles.input}
                    autoCapitalize="none"
                    onSubmitEditing={this.handleLogin}
                />
                <TouchableOpacity onPress={this.handleLogin} >
                    <View style={styles.userInfo}>
                        <Text style={{ fontSize: 23, color: 'white' }}  >
                            Sign In
                        </Text>
                    </View>
                </TouchableOpacity>
                {/* <Button style={styles.userInfo} title="Sign In" onPress={this.handleLogin} /> */}
                <Text style={{textAlign: 'center'}}>New User? 
                    <Text style={{color: 'white', fontWeight: 'bold'}}
                    onPress={()=>this.props.navigation.navigate('Signup')}> 
                        Sign Up 
                    </Text>
                </Text>
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
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'rgba(12, 130, 167, 0.8)'
    },
    formContainer: {
        top:30,
        width: 300,
        height: 500,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    userInfo: { 
        borderRadius: 7,
        height: 50,
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'rgb(93, 180, 227)',
        marginVertical: 10
    },
    input: {
        fontSize:25,
        color: '#5e5b5b',
        backgroundColor: 'rgb(242, 246, 247)',
        paddingLeft: 5,
        marginVertical: 10,
        height: 35,
        borderRadius: 5
    },
    footer: {
        position: 'absolute',
        height: 80,
        // backgroundColor: '#0E82A7',
        left: 0,
        right: 0,
        bottom: 0
    }
})
export default connect(null, { setUser })(Login);