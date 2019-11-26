import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Button } from 'react-native';
import { Header } from 'react-native-elements';
import { connect } from 'react-redux';
import { updateCurrentProduct, setUser } from '../actions';
import { withNavigation } from 'react-navigation';

class NewProduct extends Component {
    state ={
        name: "",
        image: "",
        quantity: 0,
        price: 0,
        description: "",
        note: "",
        folder_id: this.props.folder_id
    }
    handleChange = (name,value) => {
        this.setState({[name]: value})
    }

    randerBack = () => {
        return(
            <View>
                <Text onPress={()=>this.props.navigation.navigate('Home')} style={{ color: '#fff', fontSize: 20}}>Back</Text>
            </View>
        )
    }

    handleSave = () => {
        // console.log("Current Folder ID: ",this.props.folder_id)
        // console.log("Current User ID: ",this.props.user_id)
        if(this.state.image==="")
            this.setState({image: "http://www.premiumlogistics-sl.com/wp-content/uploads/2015/07/products-corrugated-stock-boxes-shipping-kraft-shorr-packaging_0.jpg"})
            
        fetch("http://10.0.2.2:3000/api/v1/products",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(this.state)
        })
        .then(res => res.json())
        .then(product => this.props.updateCurrentProduct(product))
        .then(()=>this.props.navigation.navigate('Home'))

        fetch("http://10.0.2.2:3000/api/v1/users/"+this.props.user.id)
        .then(resp => resp.json())
        .then((user)=>{
            this.props.setUser(user)
        })
    }
    render(){
        return(
            <View>
                <Header 
                containerStyle = {{backgroundColor: '#0E82A7', height: 100}}
                leftComponent = {this.randerBack}
                centerComponent={{ text: "New Folder", style: { color: '#fff', fontSize: 30, fontWeight: 'bold'} }}
                rightComponent = {{icon: 'menu', color: 'white', size: 40}}
                />
                <View>
                    <Text>Product name</Text>
                    <TextInput 
                        placeholder="Folder Name" 
                        onChangeText={(v)=>this.handleChange("name",v)} 
                        value={this.state.name}
                    />
                    <Text>Product Image</Text>
                    <TextInput 
                        placeholder="Folder Image" 
                        onChangeText={(v)=>this.handleChange("image",v)} 
                        value={this.state.image}
                    />
                    <Text>Product Quantity</Text>
                    <TextInput 
                        placeholder="Quantity" 
                        onChangeText={(v)=>this.handleChange("quantity",v)} 
                        value={this.state.quantity.toString()}
                    />
                    <Text>Product Price</Text>
                    <TextInput 
                        placeholder="Price" 
                        onChangeText={(v)=>this.handleChange("price",v)} 
                        value={this.state.price.toString()}
                    />
                    <Text>Product Description</Text>
                    <TextInput 
                        placeholder="Desciption" 
                        onChangeText={(v)=>this.handleChange("description",v)} 
                        value={this.state.description}
                    />
                    <Text>Product Note</Text>
                    <TextInput 
                        placeholder="Note" 
                        onChangeText={(v)=>this.handleChange("note",v)} 
                        value={this.state.note}
                    />
                    <Button title="Save" onPress={this.handleSave} />
                </View>
            </View>
        )
    }
    
}

const styles = StyleSheet.create({});

mapStateToProps = (state) => {
    return{
        user: state.user,
        folder_id: state.current_folder_id
    }
}

export default connect(mapStateToProps, { updateCurrentProduct, setUser })(withNavigation(NewProduct));