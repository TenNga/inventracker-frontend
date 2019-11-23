import React from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';
import BackBtn from '../components/BackBtn';
import { connect } from 'react-redux';

const TopHeader = (props) => {
    return(
        <View>
             <Header 
                containerStyle = {{backgroundColor: '#0E82A7', height: 100}}
                leftComponent = {props.currentFolderId? <BackBtn />: null}
                centerComponent={{ text: props.headerText, style: { color: '#fff', fontSize: 40, fontWeight: 'bold'} }}
                rightComponent = {{icon: 'menu', color: 'white', size: 40}}
            />
        </View>
    )
}
mapStateToProps = (state) => {
    return {currentFolderId: state.current_folder_id}
}
export default connect(mapStateToProps)(TopHeader);