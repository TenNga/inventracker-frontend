import React, { Component } from 'react';
import { createAppContainer} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './container/Login';
import Signup from './container/Signup';
import reducer from './reducers'
import { Provider} from 'react-redux';
import { createStore } from 'redux'


const navigator = createDrawerNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions:{
        drawerLockMode: 'locked-closed'
      }
    }, 
    Signup: {
      screen: Signup,
      navigationOptions:{
        drawerLockMode: 'locked-closed'
      }
    }
  },
  {
    initialRouteName: 'Login',
    drawerPosition: 'right',
    drawerType: 'slide',
    defaultNavigationOptions: {
      title: 'InvenTracker',
      headerStyle: {
        backgroundColor: '#0E82A7',
      },
      headerTitleStyle:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30
      }
    }
  }
);
const Navigation = createAppContainer(navigator);

class App extends Component {
  render() {
    return(
      <Provider store={createStore(reducer)}>
        <Navigation />
      </Provider>
    )
  }
}
export default App;
