// import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import Login from './Login'
// import Signup from './Signup';
// import reducer from '../reducers'
// import { Provider} from 'react-redux';
// import { createStore } from 'redux'


// class Home extends Component {
//   state = {
//     signUp: false
//   }

//   signUpStatus = (status) => {
//     this.setState({signUp: status})
//   }

//   render(){
//     return (
//       <Provider store={createStore(reducer)}>
//         <View style={styles.container}>
//           {this.state.signUp? <Signup signUpStatus={this.signUpStatus} /> : <Login />}
//         </View>
//       </Provider>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#0E82A785',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     top: 0
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
// });

// export default Home;
