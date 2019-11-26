import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import ImagePicker from 'react-native-image-picker';

class ImagePick extends React.Component {
    render(){
        return(
            <View>
                <Button 
                    title="Choose Photo"
                    onPress={this.handleChoosePhoto}
                />
            </View>
        )
    }
};
export default ImagePick ;