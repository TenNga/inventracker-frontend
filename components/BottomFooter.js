import React,{Component} from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AddOption from './AddOption';

class BottomFooter extends Component {
    state= {
        clicked: false
    }
    handleClick = () => {
        this.setState(prevState => ({clicked: !prevState.clicked}))
    }
    render(){
        return(
            <View style={styles.footer}>
                {this.state.clicked ?
                    <AddOption handleClicked = {this.handleClick} /> :
                        <Ionicons 
                            onPress={this.handleClick}
                            name="ios-add-circle-outline" 
                            size={60} color="#0E82A7" 
                            style={styles.addBtn} 
                        />
                }
            </View>
        )
    }
}
const styles = StyleSheet.create({
    footer: {
        flex:1,
        backgroundColor: 'rgba(54,54,54,0)'
    },
    addBtn: {
        flex: 1,
        marginRight: 20,
        alignSelf: 'flex-end'
    }
})
export default BottomFooter;