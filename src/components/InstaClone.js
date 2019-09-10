import React, { Component } from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import config from '../config';

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
        console.log("Picture Height:", (Dimensions.get("window").height) / 2);
        
    }

    // component renderer
    render() {

        const imageUri = "https://lh3.googleusercontent.com/RK1yxVSm8gQmpP8uZ1OxMqtWw4V1S_REoXhzAqOtgPF9N6eSmHr-VPWniq_8TZ1yGdjk22Y5H9-DXbqO8l_LZVSlqyw"
        
        return (
            <View style={styles.container}>
                {/* Navbar Container - NavBar Placeholder */}
                <View style={styles.tempNav}>
                    <Text>INSTAGRAM</Text>
                </View>
                
                <View style={styles.userBar}>
                
                    {/* Split user profile pic and ellipsis into opposite sides  using flexbox*/}
                    
                    {/* User Profile Pic */}
                    <View style={{ flexDirection: 'row', alignItems: 'center'}}>

                        <Image 
                            style={styles.profilePic}
                            source={{ uri: "https://lh3.googleusercontent.com/y0nVKF7zEcmIM7mqfTDMLxjYD081q_gcxBTmGyIuC8FZwoDGc3Leto4dmemMG82lSjGt9b46mkmtnz7yEHdjVcVtpA"}}
                        />
                        
                        <Text style={{ marginLeft: 5, fontWeight: "700" }}>RNative Ogor</Text>
                    
                    </View>
                    
                    {/* Ellipsis Place holder */}
                    <View>
                        <Text style={{fontSize: 28}}>...</Text>
                    </View>
                
                </View> 
                
                {/* Image Feed Picture */}
                <Image style={{width: this.state.screenWidth, height: this.state.pictureHeight }}
                    source= {{ 
                        uri:  imageUri
                    }}
                />

                {/* Icon bar container View */}
                <View style={styles.iconBar}>
                    
                    {/* heart Icon */}
                    <Image
                        style={styles.icon}
                        source={ config.images.heartIcon }
                    />

                    {/* chat Icon */}
                    <Image
                        style={styles.icon}
                        source={ config.images.chatIcon }
                    />

                    {/* arrow Icon */}
                    <Image
                        // array styling to override styl object
                        style={[styles.icon, { width: 40, height: 40 } ]}
                        source={ config.images.arrowIcon }
                    />                    
                
                </View>
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
    userBar: {
        flexDirection: 'row',
        width: "100%",
        height: config.stylesConstants.rowHeight,
        backgroundColor: "rgb(255,255,255)",
        paddingHorizontal: 5,
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
    iconBar: {
        height: config.stylesConstants.rowHeight,
        width: '100%',
        borderColor: config.stylesConstants.defaultBorderColor,        
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 30,
        height: 30,
        marginHorizontal: 10,
    }
  });