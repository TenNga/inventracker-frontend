import React, { Component } from 'react';
import { 
    Text, 
    View, 
    StyleSheet,
    TextInput, 
    Button,
    KeyboardAvoidingView} from 'react-native';
import { Header } from 'react-native-elements';
import { connect } from 'react-redux';
import { updateCurrentProduct, setUser } from '../actions';
import { withNavigation } from 'react-navigation';
import ImagePick from '../components/ImagePick';

class NewProduct extends Component {
    state ={
        name: "",
        image: "",
        quantity: 0,
        price: 0,
        description: "",
        note: "",
        folder_id: this.props.folder_id,
        qr_id: this.props.qr_id? this.props.qr_id : ""
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

    checkForEmpty = () => {
        if(this.state.name === "")
            this.setState({name: "New Product"})
        if(this.state.description === "")
            this.setState({description: "No description added"})
        if(this.state.note === "")
            this.setState({note: "No note added"})
    }

    handleSave = (id) => {
      
        this.checkForEmpty();
        this.setState({qr_id: id.toString()},()=>
                fetch("http://localhost:3000/api/v1/products",{
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
        )//setState 
        fetch("http://localhost:3000/api/v1/users/"+this.props.user.id)
        .then(resp => resp.json())
        .then((user)=>{
            this.props.setUser(user)
        })
    }//handleSave

    handleImageUrl = (url) => {
        this.setState({image: url})
    }

    handleLinkProduct = () => {
        this.props.navigation.navigate('QRCodeGenerator')
    }
    render(){
        // console.log("QR ID: ",this.state.qr_id)
        console.log("QR ID FROM MAIN STATE: ",this.props.qr_id)
        console.log("PRODUCT STATE, ", this.state)
        return(
            <KeyboardAvoidingView behavior="position">
            <View >
                <Header 
                containerStyle = {{backgroundColor: '#0E82A7', height: 100}}
                leftComponent = {this.randerBack}
                centerComponent={{ text: "New Product", style: { color: '#fff', fontSize: 30, fontWeight: 'bold'} }}
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
                    {/* <TextInput
                        style={styles.input} 
                        placeholder="Product Image" 
                        onChangeText={(v)=>this.handleChange("image",v)} 
                        value={this.state.image}
                    /> */}
                    <View><ImagePick handleImageUrl={this.handleImageUrl}/></View>
                    <Button title="LINK ORCODE" onPress={this.handleLinkProduct} />

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
                        value={this.state.price.toString()}
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
                    <Button title="Save" onPress={()=>this.handleSave(this.props.qr_id)} />
                </View>
            </View>
            </KeyboardAvoidingView>
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
        user: state.user,
        folder_id: state.current_folder_id,
        qr_id: state.product_qr
    }
}

export default connect(mapStateToProps, { updateCurrentProduct, setUser })(withNavigation(NewProduct));