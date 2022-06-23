import React from 'react'
import {Text, View, StyleSheet, Image} from "react-native";
import StyledText from '../components/StyledText'
import RepositoryStats from "./RepostoryStats";
import theme from "../theme";


const RepositoryItem = (props) => {
    return (
        <View key={props.id} style={styles.container}>
            <Image style={styles.image} source={{uri: props.ownerAvatarUrl}} />
            <StyledText fontSize={"subheading"} fontWeight={"bold"}>Full name: {props.fullName}</StyledText>
            <StyledText>{props.description}</StyledText>
            <StyledText style={styles.language}>{props.language}</StyledText>

            <RepositoryStats {...props}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingLeft: 20,
        paddingBottom: 5,
        paddingTop: 10
    },
    language: {
        padding: 4,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-start',
        borderRadius: 4,
        overflow: 'hidden'
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 10
    }

})


export default RepositoryItem