import React from 'react';
import { Text, View, Button, StyleSheet, ImageBackground} from 'react-native';
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation';

const AddOption = (props) => {
    return(
        <View style={styles.container}>
            <ImageBackground source={require('../assets/option_bg.png')} style={{width: '100%', height: '100%'}}>
            <View style={styles.option}>
                <Text onPress={()=>{
                    props.handleClicked()
                    props.navigation.navigate('NewFolder')
                }} style={styles.optionBtn}>FOLDER</Text>
                { props.currentFolderID !== null?
                <Text onPress={()=> {
                    props.handleClicked();
                    props.navigation.navigate('NewProduct');
                }} 
                    style={styles.optionBtn}>
                    PRODUCT
                </Text> :
                null }
            </View>
            <View style={styles.cancelBtn}>
                <Text onPress ={props.handleClicked} style={styles.cancelBtnText}>CANCEL</Text>
            </View>
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#0E82A7'
    },
    option: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    optionBtn: {
        alignSelf: 'center',
        color: 'white',
        fontWeight: 'bold',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 6,
        padding: 7,
        marginTop: 3
    },
    cancelBtn: {
        flex:1,
        padding: 5,
        marginBottom: 10
    },
    cancelBtnText: {
        fontSize: 20,
        alignSelf: 'center',
        justifyContent: 'center',
        color: 'white',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 10,
        backgroundColor: 'grey',
        paddingHorizontal: 20
       
    }
});

mapStateToProps = (state) => {
    return{
        currentFolderID: state.current_folder_id
    }
}

export default connect(mapStateToProps)(withNavigation(AddOption));