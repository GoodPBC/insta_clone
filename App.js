/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import { InstaClone } from './src/components/InstaClone.js'
import config from './src/config/index.js';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <InstaClone />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: config.stylesConstants.backgroundColor,
  },
});
