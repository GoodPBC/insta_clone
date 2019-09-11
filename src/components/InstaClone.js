import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Post } from '../components/presentation/index';
import config from '../config';

export class InstaClone extends Component {

    // component renderer
    render() {
        
        return (
            <View style={styles.container}>
                {/* Navbar Container - NavBar Placeholder */}
                <View style={styles.tempNav}>
                    <Text>INSTAGRAM</Text>
                </View>
                <Post />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    // this is style for the view tag for our nav holder
    tempNav: {
        width: "100%",
        height: 75,
        paddingTop: 25,
        backgroundColor: "rgb(255,254,255)",
        borderBottomColor: config.stylesConstants.defaultBorderColor,
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: "center",
        alignItems: "center",
    },
});