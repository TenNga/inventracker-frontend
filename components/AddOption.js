import React from 'react';
import { Text, View, Button, StyleSheet} from 'react-native';
import { withNavigation } from 'react-navigation';

const AddOption = (props) => {
    return(
        <View style={styles.container}>
            <View style={styles.option}>
                <Text onPress={()=>props.navigation.navigate('NewFolder')} style={styles.optionBtn}>FOLDER</Text>
                <Text style={styles.optionBtn}>PRODUCT</Text>
            </View>
            <View style={styles.cancelBtn}>
                <Text onPress ={props.handleClicked} style={styles.cancelBtnText}>CANCEL</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0E82A7'
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

export default withNavigation(AddOption);