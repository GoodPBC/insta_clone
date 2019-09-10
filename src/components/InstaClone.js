import React, { Component } from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'

export class InstaClone extends Component {

    constructor(){
        super();
        this.state = {
            screenWidth: 0,
            pictureHeight: 0,
        };
    }

    // Server side image cropping im lifecycle method
    componentDidMount(){ 
        // log device width to console
        console.log("Device Screen Width:", Dimensions.get("window").width);
        // save device width to state
        this.setState({
            screenWidth: Dimensions.get('window').width,
            pictureHeight: (Dimensions.get('window').height) / 2,
        });
        console.log("Device Screen Height:", (Dimensions.get("window").height) / 2);
        
    }

    // component renderer
    render() {
        return (
            <View style={styles.container}>
                {/* Navbar Container - NavBar Placeholder */}
                <View style={styles.tempNav}>
                    <Text>INSTAGRAM</Text>
                </View>
                
                <View style={styles.userBar}>
                
                    {/* Split user profile pic and menu into opposite sides  using flexbox*/}
                    {/* User Profile Pic */}
                    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                        <Image 
                            style={styles.profilePic}
                            source={{ uri: "https://lh3.googleusercontent.com/y0nVKF7zEcmIM7mqfTDMLxjYD081q_gcxBTmGyIuC8FZwoDGc3Leto4dmemMG82lSjGt9b46mkmtnz7yEHdjVcVtpA"}}
                        />
                        <Text style={{marginLeft: 5}}>Native Ogor</Text>
                    </View>
                    {/* Ellipsis Place holder */}
                    <View>
                        <Text style={{fontSize: 36, marginTop: 5}}>...</Text>
                    </View>
                </View> 
                <Image style={{width: this.state.screenWidth, height: this.state.pictureHeight }}
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
    // this is style for the view tag for our nav holder
    tempNav: {
        width: "100%",
        height: 75,
        paddingTop: 25,
        backgroundColor: "rgb(250,250,150)",
        borderBottomColor: "rgb(233,233,233)",
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: "center",
        alignItems: "center",
    },
    userBar: {
        flexDirection: 'row',
        width: "100%",
        height: 75,
        backgroundColor: "rgb(255,255,255)",
        paddingHorizontal: 15,
        justifyContent: "space-between",
    },
    text: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    profilePic: {
        width: 40, 
        height: 40,
        borderRadius: 20,
    },
  });