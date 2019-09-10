import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export class InstaClone extends Component {
    render() {
        return (
            <View>
                <Text> Instagram Clone Main Component</Text>
                <Image 
                    style={styles.stretch}
                    source= {{ 
                        uri:  "https://lh3.googleusercontent.com/RK1yxVSm8gQmpP8uZ1OxMqtWw4V1S_REoXhzAqOtgPF9N6eSmHr-VPWniq_8TZ1yGdjk22Y5H9-DXbqO8l_LZVSlqyw"
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    stretch: {
      width: 200,
      height: 200,
      resizeMode: 'stretch'
    }
  });