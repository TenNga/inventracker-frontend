import * as React from 'react';
import { Button, Image, View, Text} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

export default class ImagePick extends React.Component {
  state = {
    image: null,
  };

  render() {
    let { image } = this.state;

    return (
      <View>
      {image? <Image source={{ uri: image }} style={{alignSelf: 'center', width: 100, height: 50 }} />:
          <View style={{justifyContent:'center', flexDirection: 'row'}}>
            <View style={{margin:5, width:200}}>
              <Button
                title="Camera"
                onPress={this._takePicture}
              />
            </View>
            <View style={{margin: 5, width:200}}>
              <Button
                title="Browse"
                onPress={this._pickImage}
              /> 
            </View>
          </View>
        }
       
      </View>
    );
  }

  componentDidMount() {
    this.getPermissionAsync();
    // console.log('hi');
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }

  _takePicture = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    // console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
      this.props.handleImageUrl(result.uri)
    }
  };
  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    // console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
      this.props.handleImageUrl(result.uri)
    }
  };
}