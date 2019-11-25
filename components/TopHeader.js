import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { Header } from 'react-native-elements';
import BackBtn from '../components/BackBtn';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { clearState } from '../actions';

handleLogOut = (props) => {
    props.navigation.navigate('Login')
    props.clearState();
}

const TopHeader = (props) => {
    return(
        <View>
             <Header 
                containerStyle = {{backgroundColor: '#0E82A7', height: 100}}
                leftComponent = {props.currentFolderId? <BackBtn />: null}
                centerComponent={{ text: props.headerText, style: { color: '#fff', fontSize: 40, fontWeight: 'bold'} }}
                rightComponent = {<Text onPress={()=>handleLogOut(props)} style={{ color: 'white',fontSize:20}}>Log Out</Text>}
            />
        </View>
    )
}
mapStateToProps = (state) => {
    return {currentFolderId: state.current_folder_id}
}
export default connect(mapStateToProps,{ clearState })(withNavigation(TopHeader));