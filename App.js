import React, { Component } from 'react';
import { createAppContainer} from 'react-navigation';
// import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Landing from './screens/Landing';
import NewFolder from './screens/NewFolder';
import NewProduct from './screens/NewProduct';
import Profile from './screens/Profile';
import Contact from './screens/Contact';
import Menu from './screens/Menu';
import QRCodeGenerator from './screens/QRCodeGenerator';

import reducer from './reducers';
import { Provider} from 'react-redux';
import { createStore } from 'redux';


const navigator = createStackNavigator(
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
    },
    Home: {
      screen: Landing
    },
    NewFolder: {
      screen: NewFolder
    },
    NewProduct: {
      screen: NewProduct
    },
    Profile: {
      screen: Profile,
    }, 
    Contact: {
      screen: Contact,
    }, 
    Menu: {
      screen: Menu,
    },
    QRCodeGenerator: {
      screen: QRCodeGenerator,
    }
  },
  {
    initialRouteName: 'Login',
    drawerPosition: 'right',
    drawerType: 'slide',
      headerTitleStyle:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30
      },
      headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
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
