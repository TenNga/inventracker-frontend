import React, {Component} from 'react';
import { 
    Text, 
    View, 
    StyleSheet, 
    TextInput, 
    Button,
    TouchableOpacity
} from 'react-native'
import { Header } from 'react-native-elements';
import { connect } from 'react-redux';
import { setUser } from '../actions'

class SignUp extends Component {
    state = {
        user:{
            user_name: "",
            first_name: "",
            last_name: "",
            password: ""
        },
        loading: false

}

    handleSignup = () => { //handle fetch request
        this.setState({loading: true});
        fetch("https://arcane-wildwood-85713.herokuapp.com/api/v1/users",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify({
                user_name: this.state.user.user_name.toUpperCase(),
                first_name: this.state.user.first_name,
                last_name: this.state.user.last_name,
                password: this.state.user.password
            })
        })
        .then(res => res.json())
        .then(user=>{
            this.setState({loading: false})
            this.props.setUser(user)
        })
        .then(()=>this.props.navigation.navigate('Home'))
    }

    render(){
         console.log("Main State for user: ", this.state)
        return(
        <View style={styles.container}>
            <Header 
            containerStyle = {{backgroundColor: '#0E82A7'}}
            centerComponent={{ text: 'InvenTracker', style: { color: '#fff', fontSize: 30} }}
            />
        <View style={styles.formContainer}>
            <View style={styles.userInfo}>
                        <Text style={{  fontSize: 23, color: 'white' }}>User Info</Text>
            </View>
            <TextInput 
                placeholder="User Name" 
                onChangeText={(v)=>this.setState({user: {...this.state.user,user_name: v}})}
                value={this.state.user_name}
                style={styles.input}
                />
            <TextInput 
                    placeholder="First Name" 
                    onChangeText={(v)=>this.setState({user:{...this.state.user,first_name: v}})}
                    value={this.state.first_name}
                    style={styles.input}
                    />
            <TextInput 
                placeholder="Last Name" 
                onChangeText={(v)=>this.setState({user: {...this.state.user,last_name: v}})}
                value={this.state.last_name}
                style={styles.input}
                />
            <TextInput 
                placeholder="Password" 
                autoCapitalize="none"
                onChangeText={(v)=>{
                    this.setState({user: {...this.state.user,password: v}});
                    
                }}
                value={this.state.password}
                secureTextEntry
                style={styles.input}
                />
            <View style={styles.userInfo}>
                    <Text style={{  fontSize: 23, color: 'white' }} onPress={this.handleSignup} >
                        {this.state.loading? "Loading..." : "Sign Up" }
                    </Text>
            </View>

            {/* <Button title="Sign Up" onPress={this.handleSignup}/>  */}

            <Text style={{textAlign: 'center'}}>Already have account?
                    <Text style={{color: 'white', fontWeight: 'bold'}}
                    onPress={()=>this.props.navigation.navigate('Login')}> 
                        Log In
                    </Text>
            </Text>
        </View>
        <View style = {styles.footer}>
                <Text style={{flex:1,textAlign: 'center',marginVertical: 30, color: 'white'}}>Copy Right @ InvenTracker 2019</Text>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'rgba(12, 130, 167, 0.8)'
    },
    formContainer: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center'
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
        backgroundColor: "white",
        paddingLeft: 5,
        marginVertical: 10,
        height: 35,
        borderRadius: 5
    },
    footer: {
        position: 'absolute',
        height: 80,
        backgroundColor: '#0E82A7',
        left: 0,
        right: 0,
        bottom: 0
    }
})

const mapStateToProps = (state) => {
    return{
        state: state.user
    }
}


export default connect(mapStateToProps,{setUser})(SignUp);