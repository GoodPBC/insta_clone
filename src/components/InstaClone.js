import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export class InstaClone extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.tempNav}/>
                <Image style={styles.stretch}
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
        flex: 1,
        width: "100%",
        height: "100%",
    },
    tempNav: {
        width: "100%",
        height: 75,
        backgroundColor: "rgb(250,250,150)",
        borderBottomColor: "rgb(233,33,233)",
        borderBottomWidth: StyleSheet.hairlineWidth,
    },  
    text: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    stretch: {
      width: "100%",
      height: 100,
    }
  });