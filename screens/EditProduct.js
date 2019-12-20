import React, {Component} from 'react';
import { Text, 
    View, 
    Button, 
    StyleSheet,
    TextInput,
    Image,
    KeyboardAvoidingView } from 'react-native';
import { Header } from 'react-native-elements';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import {updateCurrentProduct,setUser,setCurrentFolder} from '../actions'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

class EditProduct extends Component{

    //const {editProduct} = this.props
    
    state={
        name: this.props.editProduct.name,
        image: this.props.editProduct.image,
        quantity: this.props.editProduct.quantity,
        price: this.props.editProduct.price,
        description: this.props.editProduct.description,
        note: this.props.editProduct.note,
        folder_id: this.props.editProduct.folder_id,
        qr_id: this.props.editProduct.qr_id? this.props.editProduct.qr_id : null
    }
    
    handleChange = (name,value) => {
        this.setState({[name]: value})
    }

    handleSave = () => {
        fetch("https://arcane-wildwood-85713.herokuapp.com/api/v1/products/"+this.props.editProduct.id,{
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Accepts": "application/json"
                },
                body: JSON.stringify(this.state)
            })
            .then(res => res.json())
            .then(product => this.props.updateCurrentProduct(product))
            .then(()=>this.props.navigation.goBack())

        fetch("https://arcane-wildwood-85713.herokuapp.com/api/v1/users/"+this.props.user.id)
            .then(resp => resp.json())
            .then((user)=>{
                this.props.setUser(user)
            })
    }//handleSave

    randerBack = () => {
        return(
            <View>
                <Text onPress={()=>this.props.navigation.navigate('Home')} style={{ color: '#fff', fontSize: 20}}>Back</Text>
            </View>
        )
    }

    render(){
        // console.log("EDIT PRODUCT: =====>",this.props.editProduct)
        return(
            <KeyboardAwareScrollView>
            <View >
                <Header 
                containerStyle = {{backgroundColor: '#0E82A7', height: 100}}
                leftComponent = {this.randerBack}
                centerComponent={{ text: "Edit Product", style: { color: '#fff', fontSize: 30, fontWeight: 'bold'} }}
                />
                <View style={styles.formContainer}>
                    <Text style={styles.inputTitle}>Product name</Text>
                    <TextInput
                        style={styles.input} 
                        placeholder="Product Name" 
                        onChangeText={(v)=>this.handleChange("name",v)} 
                        value={this.state.name}
                    />
                    <Text style={styles.inputTitle}>Product Image</Text>
                    
                    <View>
                        <Image 
                            style={{width:100, height: 100, borderRadius: 5}}
                            source={{uri: this.props.editProduct.image}}
                        />    
                    </View>

                    <Text style={styles.inputTitle}>Product Quantity</Text>
                    <TextInput
                        style={styles.input} 
                        placeholder="Quantity" 
                        onChangeText={(v)=>this.handleChange("quantity",v)} 
                        value={this.state.quantity.toString()}
                        onFocus={()=>this.setState({quantity: ""})}
                    />
                    <Text style={styles.inputTitle}>Product Price</Text>
                    <TextInput
                        style={styles.input} 
                        placeholder="Price" 
                        onChangeText={(v)=>this.handleChange("price",v)} 
                        value={this.state.price? this.state.price.toString(): "0"}
                        onFocus={()=>this.setState({price: ""})}
                    />
                    <Text style={styles.inputTitle}>Product Description</Text>
                    <TextInput
                        style={styles.input} 
                        placeholder="Desciption" 
                        onChangeText={(v)=>this.handleChange("description",v)} 
                        value={this.state.description}
                    />
                    <Text style={styles.inputTitle}>Product Note</Text>
                    <TextInput
                        style={styles.input} 
                        placeholder="Note" 
                        onChangeText={(v)=>this.handleChange("note",v)} 
                        value={this.state.note}
                    />
                    <Button 
                        title="Save" 
                        onPress={this.handleSave} 
                    />
                </View>
            </View>
            </KeyboardAwareScrollView>
        )
    }
}

const styles = StyleSheet.create({
    formContainer: {
        margin: 10
    },
    input: {
        fontSize: 20,
        backgroundColor: 'rgb(242, 246, 247)',
        paddingLeft: 5,
        marginVertical: 10,
        height: 35,
        borderRadius: 5
    },
    inputTitle: {
        color: '#0E82A7',
        fontSize: 20,
        fontWeight: 'bold'
    }
});

mapStateToProps = (state) => {
    return{
        editProduct: state.editProduct,
        user: state.user
    }
}   

export default connect(mapStateToProps,{updateCurrentProduct,setUser,setCurrentFolder})(withNavigation(EditProduct));