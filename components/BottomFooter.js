import React,{Component} from 'react';
import { View, Text, StyleSheet, ImageBackground} from 'react-native';
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
            <ImageBackground source={require('../assets/bottom_bgV2.png')} style={{width: '100%', height: '100%'}}>
                <View style={styles.footer}>
                    {this.state.clicked ?
                        <AddOption handleClicked = {this.handleClick} /> :
                            <Ionicons 
                                onPress={this.handleClick}
                                name="ios-add-circle-outline" 
                                size={60} color="white" 
                                style={styles.addBtn} 
                            />
                    }
                </View>
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    footer: {
        flex:1
    },
    addBtn: {
        flex: 1,
        marginRight: 20,
        alignSelf: 'flex-end'
    }
})
export default BottomFooter;