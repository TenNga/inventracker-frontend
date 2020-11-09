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
import { TouchableOpacity } from 'react-native-gesture-handler';

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
                fetch("https://arcane-wildwood-85713.herokuapp.com/api/v1/products",{
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
        fetch("https://arcane-wildwood-85713.herokuapp.com/api/v1/users/"+this.props.user.id)
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
        // console.log("QR ID FROM MAIN STATE: ",this.props.qr_id)
        // console.log("PRODUCT STATE, ", this.state)
        return(
            <View style={{flex:1}}>
                <Header 
                containerStyle = {{backgroundColor: '#0E82A7', height: 100}}
                leftComponent = {this.randerBack}
                centerComponent={{ text: "New Product", style: { color: '#fff', fontSize: 30, fontWeight: 'bold'} }}
                />
             <KeyboardAvoidingView behavior="padding"
                style={{flex:1}}
               enabled>
                <View style={styles.formContainer}>
                    <Text style={styles.inputTitle}>Product name</Text>
                    <TextInput
                        style={styles.input} 
                        placeholder="Product Name" 
                        onChangeText={(v)=>this.handleChange("name",v)} 
                        value={this.state.name}
                    />
                    <Text style={styles.inputTitle}>Product Image</Text>
                    
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
                    <TouchableOpacity onPress={()=>this.handleSave(this.props.qr_id)}>
                        <Text style={styles.save} >SAVE</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    formContainer: {
        flex:1,
        margin: 10
    },
    input: {
        flex:1,
        fontSize: 20,
        backgroundColor: 'rgb(242, 246, 247)',
        paddingLeft: 5,
        // marginVertical: 10,
        // height: 35,
        borderRadius: 5
    },
    inputTitle: {
        flex:1,
        color: '#0E82A7',
        fontSize: 20,
        fontWeight: 'bold'
    },
    save: {
        marginTop: 5,
        height: 40,
        alignSelf: 'center',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        width: 300,
        backgroundColor: '#0E82A7',
        color: 'white',
        borderRadius: 8
    }
});

const mapStateToProps = (state) => {
    
}

export default connect(mapStateToProps, { updateCurrentProduct, setUser })(withNavigation(NewProduct));