import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { setParentFolder, setUser,setEditProduct } from '../actions'


const handleDelete = (props) => {
    const newProducts = props.parent_folder.products.filter(p => p.id !== props.product.id)
    props.setParentFolder({...props.parent_folder,products: newProducts});
    // console.log("Parent Folder===> ", props.parent_folder)
    fetch("http://localhost:3000/api/v1/products/"+props.product.id,{
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accepts": "application/json"
        }
    }).then(()=>console.log("After Fetchinging....."))
    
        fetch("http://localhost:3000/api/v1/users/"+props.user.id)
        .then(resp => resp.json())
        .then((user)=>{
            props.setUser(user)
        })
      
}

handleProductSelection = (props) => {
    props.setEditProduct(props.product)
    props.navigation.navigate("EditProduct")
}

const ProductList = (props) => {
    return (
        <View style={styles.container}>
            <Image 
                style={{width:100, height: 100, borderRadius: 5}}
                source={{uri: props.product.image}}
            />
            <TouchableOpacity onPress={()=>handleProductSelection(props)}>
            <View style = {styles.description} >
                <Text style = {styles.productName}>{props.product.name}</Text>
                <Text style = {styles.productDesc}>Qty: {props.product.quantity} | $ {props.product.price * props.product.quantity}</Text>
                <Text style = {styles.description}>Description: {props.product.description}</Text>
                <Text style = {styles.productDesc}>Note: {props.product.note}</Text>
            </View>
            </TouchableOpacity>
            <View  style={{alignSelf:'flex-start', marginRight: 20}}>
                <TouchableOpacity onPress={()=>handleDelete(props)}>
                    <Ionicons  name="ios-trash" size={30} color="#0E82A7" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        // backgroundColor: 'rgb(223, 228, 232)',
        marginTop: 10
       
    },
    description: {
        flex: 1,
        marginLeft: 5,
        borderTopWidth: 1,
        borderTopColor: 'rgb(223, 228, 232)'
    },
    productName: {
        fontSize: 20,
        fontWeight: 'bold',
        margin:2
    },
    productDesc: {
        fontWeight: 'bold',
        marginLeft: 5
    }
})

mapStateToProps = (state) => {
    return{
        user: state.user,
        parent_folder: state.parent_folder
    }
}

export default connect(mapStateToProps, { setParentFolder, setUser,setEditProduct })(withNavigation(ProductList));