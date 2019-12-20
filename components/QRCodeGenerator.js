import * as React from 'react';
import { Text, View, StyleSheet, Button,Alert } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { connect }from 'react-redux';
import { withNavigation } from 'react-navigation';
import { setProductQr,setCurrentFolder, setEditProduct,setFolderProductSearch } from '../actions'

class QRCodeGenerator extends React.Component {
  state = {
    hasCameraPermission: null,
    scanned: false,
  };

  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  };

  render() {
    const { hasCameraPermission, scanned } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />

        {scanned && (
          <Button title={'Tap to Scan Again'} onPress={() => this.setState({ scanned: false })} />
        )}
      </View>
    );
  }

  handleBarCodeScanned = ({data }) => {
    this.setState({ scanned: true });
    Alert.alert('SUCCESS',`Bar Code ${data} has been scanned and added!`);
    this.props.setProductQr(data)

    if(this.props.folderProductSearch){
      this.props.setProductQr("")
      fetch("https://arcane-wildwood-85713.herokuapp.com/api/v1/folders")
            .then(res => res.json())
            .then((folders)=>{
                const match = folders.filter(f => f.name.toUpperCase()===data.toUpperCase() && f.user_id === this.props.user.id)
                // console.log("ALL FOLDER ", allFolder.length)
                // console.log("QR ID:===> ", data)
                if(match.length > 0){
                  this.props.setCurrentFolder(match)
                  this.props.navigation.goBack()
                }
            })

        fetch("https://arcane-wildwood-85713.herokuapp.com/api/v1/products")
        .then(res => res.json())
        .then((products)=>{
            const match = products.filter(p => p.qr_id === data)
            
            if(match.length>0){
              this.props.setEditProduct(match[0])
              this.props.navigation.navigate('ProductShow')
              // const scanFolder = allFolder.find(f => f.id === match[0].folder_id)
              // this.props.setCurrentFolder(scanFolder)
              // console.log("SCAN FOLDER:====> ", allFolder.length)
              // this.props.navigation.navigate("Home")
            }
        })
        this.props.setFolderProductSearch(false)
    }

    this.props.navigation.goBack()

  };
}

mapStateToProps = (state) => {
  return{
    user: state.user,
    folderProductSearch: state.folderProductSearch
  }
}

export default connect(mapStateToProps, {setProductQr,setCurrentFolder,setEditProduct,setFolderProductSearch})(withNavigation(QRCodeGenerator))