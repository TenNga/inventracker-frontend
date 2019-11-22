import React, {Component} from 'react';
import { 
    Text, 
    View, 
    StyleSheet} from 'react-native';
import TopHeader from '../components/TopHeader';
import SearchBar from '../components/SearchBar';
import { connect } from 'react-redux';
import BottomFooter from '../components/BottomFooter';
import FolderContainer from '../container/FolderContainer';

const Landing = () => {
    return(
        <View style={{flex: 1}}>
            <TopHeader headerText={"InvenTracker"} />
            <View style={styles.searchBar}>
                <SearchBar />
            </View>
            <View style={styles.mainContainer}>
                <FolderContainer />
            </View>
            <View style={styles.footer}>
                <BottomFooter />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    searchBar: {
        flex: 1,
        justifyContent: 'center'
    },
    mainContainer: {
        flex: 6
    },
    footer: {
        flex: 1
    }
})
export default Landing;