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
        <View>
          <View style={{margin:5}}>
          <Button
            title="Take a picture with camera"
            onPress={this._takePicture}
          />
        </View>
        <View style={{margin: 5}}>
          <Button
            title="Pick an image from camera roll"
            onPress={this._pickImage}
          />
        </View>
        </View>
        {image &&
        <View>
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        <Text>Image Selected</Text>
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