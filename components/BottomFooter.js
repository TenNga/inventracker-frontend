import React from 'react';
import { View, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BottomFooter = () => {
    return(
        <View style={styles.footer}>
              <Ionicons name="ios-add-circle-outline" size={60} color="#0E82A7" style={styles.addBtn} />
        </View>
    )
}
const styles = StyleSheet.create({
    footer: {
        flex:1
    },
    addBtn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
        alignSelf: 'flex-end',
    }
})
export default BottomFooter;