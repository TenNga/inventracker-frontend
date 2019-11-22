import React, {Component} from 'react';
import { 
    Text, 
    View, 
    StyleSheet} from 'react-native';
import TopHeader from '../components/TopHeader';
import SearchBar from '../components/SearchBar';
import { connect } from 'react-redux';
import { Header } from 'react-native-elements';

const Landing = () => {
    return(
        <View>
            <TopHeader headerText={"InvenTracker"} />
            <SearchBar />
        </View>
    )
}
const styles = StyleSheet.create({

})
export default Landing;