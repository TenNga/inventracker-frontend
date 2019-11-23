import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

const ProductList = ({product}) => {
    return (
        <View style={styles.container}>
            <Image 
                style={{width:100, height: 100, borderRadius: 5}}
                source={{uri: product.image}}
            />
            <TouchableOpacity>
            <View style = {styles.description} >
                <Text style = {styles.folderName}>{product.name}</Text>
                <Text style = {styles.folderDes}>Qty: {product.quantity} | $ {product.price * product.quantity}</Text>
                <Text style = {styles.folderDes}>Description: {product.description}</Text>
                <Text style = {styles.folderDes}>Note: {product.note}</Text>
            </View>
            </TouchableOpacity>
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
        marginLeft: 10,
        borderTopWidth: 1,
        borderTopColor: 'rgb(223, 228, 232)'
    },
    folderName: {
        fontWeight: 'bold',
        margin:2
    },
    folderDes: {
        margin: 2
    }
})

export default ProductList;