import React, { Component } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import Post from '../presentation/Post'

export default class PostFeed extends Component {

    _renderPost() {
        return ({ item }) =>  <Post />;
    }

    _returnKey(item) {
        return ( item );
    }
    render() {
        return (
            <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]}
                keyExtractor={this._returnKey}
                renderItem={() => this._renderPost}
            />

        );
    }
}