import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Post from '../presentation/Post'

export default class PostFeed extends Component {
    render() {
        return (
            <View>
                <Post />
            </View>
        )
    }
}

const styles = StyleSheet.create({})
