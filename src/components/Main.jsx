import React from 'react'
import {Alert, StyleSheet, Text,View} from 'react-native'
import Constants from 'expo-constants'
import RepositoryList from "./RepositoryList";
import StyledText from "./StyledText";


const Main = () => {
    return (
        <View style={{marginTop:Constants.statusBarHeight, flexGrow:1}}>
            <RepositoryList />
        </View>
    )
}
export default Main;

