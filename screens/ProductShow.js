import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { Header } from 'react-native-elements';
import { setCurrentFolder } from '../actions';

const ProductShow = (props) => {

    const handleGoToFolder = () => {
        fetch("http://localhost:3000/api/v1/folders")
            .then(res => res.json())
            .then((folders)=>{
                const match = folders.filter(f => f.id === props.editProduct.folder_id && f.user_id === props.user.id)
                if(match.length > 0){
                  props.setCurrentFolder(match)
                  props.navigation.navigate('Home')
                }
            })
    }
    return(
        <View style={{flex:1}}>
        <Header 
            containerStyle = {{backgroundColor: '#0E82A7', height: 100}}
            centerComponent={{ text: "Product Info", style: { color: '#fff', fontSize: 30, fontWeight: 'bold'} }}
            // rightComponent={<Text onPress={()=>navigation.navigate('Menu')} style={{ color: 'white',fontSize:20}}>X</Text>}
            rightComponent={<Text 
                                onPress={()=>props.navigation.navigate('Home')}>
                                <Ionicons  name="ios-close-circle-outline" size={30} color="white" />
                            </Text>}
        />
        <View style={styles.container}>
            <Image 
                style={{width: 200, height: 200, borderRadius: 20}} 
                source={{uri: props.editProduct.image}} 
            />
            <TouchableOpacity onPress={handleGoToFolder}>
                <Text style={styles.folder} >
                    <Ionicons  name="ios-folder-open" size={50} color="#d6ce11" />
                    GO TO FOLDER
                </Text>
            </TouchableOpacity>
            <View style={styles.profileDesc}>
                <Text style={styles.info}>PRODUCT NAME: {props.editProduct.name}</Text>
                <Text style={styles.info}>QUANTITY: {props.editProduct.quantity}</Text>
                <Text style={styles.info}>PRICE: {props.editProduct.price}</Text>
                <Text style={styles.info}>TOTAL: {props.editProduct.quantity * props.editProduct.price}</Text>
                <Text style={styles.info}>DESCRIPTION: {props.editProduct.description}</Text>
                <Text style={styles.info}>ISBN # {props.editProduct.qr_id}</Text>
                
            </View>
            
        </View>
    
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
        paddingHorizontal: 50,
        backgroundColor: 'rgba(12, 130, 167, 0.8)'
    },
    profileDesc: {
        flex:1,
        marginTop: 20
    },
    info: {
        fontSize: 20,
        marginTop: 15,
        borderTopWidth: 2,
        borderTopColor: 'rgba(12, 130, 167, 0.8)'
    },
    folder: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
        margin:5,
        padding: 5,
        borderRadius: 10,
        backgroundColor: 'white'
    }
});

const mapStateToProps = (state) => {
    return {
        editProduct: state.editProduct,
        user: state.user
    }
}

export default connect(mapStateToProps, {setCurrentFolder})(withNavigation(ProductShow));