import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { Header } from 'react-native-elements';
import BackBtn from '../components/BackBtn';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { clearState } from '../actions';
import { Ionicons } from '@expo/vector-icons';

handleMenu = (props) => {
    props.navigation.navigate('Menu')
    // props.clearState();
}

const TopHeader = (props) => {
    return(
        <View>
             <Header 
                containerStyle = {{backgroundColor: '#0E82A7', height: 100}}
                leftComponent = {props.currentFolderId? <BackBtn />: null}
                centerComponent={{ text: props.headerText, style: { color: '#fff', fontSize: 30, fontWeight: 'bold'} }}
                rightComponent = {<Text onPress={()=>props.navigation.navigate('Menu')}><Ionicons  name="ios-menu" size={30} color="white" /></Text>}
            />
        </View>
    )
}
mapStateToProps = (state) => {
    return {currentFolderId: state.current_folder_id}
}
export default connect(mapStateToProps,{ clearState })(withNavigation(TopHeader));