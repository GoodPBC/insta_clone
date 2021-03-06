import React, { Component } from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import config from '../../config/index';

export default class Post extends Component {

    constructor(){
        super();
        this.state = {
            screenWidth: 0,
            pictureHeight: 0,
            liked: false,
        };
    }

    likeToggler() {
        this.setState({
            // shebang toggles like method
            liked: !this.state.liked
        })
        console.log("Picture is Liked:", this.state.liked);
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
        
        // Attach icon color to likeToggler in state using ternary. true(?) == rgb(237,73,86) || false(:) == null
        const likeIconColor = (this.state.liked) ? "rgb(237,73,86)" : null
        
        return (
            <View>
                
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
                

                <TouchableOpacity 
                    activeOpacity={.9}
                    onPress={() => {
                        console.log("A Picture has been pressed! likeToggler() function has been called");
                        this.likeToggler();
                    
                }}>
                
                    {/* Image Feed Picture */}
                    <Image style={{width: this.state.screenWidth, height: this.state.pictureHeight }}
                        source= {{ 
                            uri:  imageUri
                        }}
                    />
                </TouchableOpacity>
                
                {/* Icon bar container View */}
                <View style={styles.iconBar}>
                    
                    {/* heart Icon */}
                    <Image
                        style={[ styles.icon, {tintColor: likeIconColor } ]}
                        source={ config.images.heartIcon }
                    />

                    {/* chat Icon */}
                    <Image
                        style={styles.icon}
                        source={ config.images.chatIcon }
                    />

                    {/* arrow Icon */}
                    <Image
                        // array styling to override style object
                        style={[styles.icon, { width: 40, height: 40 } ]}
                        source={ config.images.arrowIcon }
                    />                    
                
                </View>

                {/* Bottom Bar View */}
                <View style={styles.commentBar}>
                    <Image
                        style={[ styles.icon, { height: 20, width: 20 } ]}
                        source={ config.images.heartIcon }
                    />
                    <Text>128 Likes</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
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
    },
    commentBar: {
        width: '100%',
        height: config.stylesConstants.rowHeight,
        borderColor: config.stylesConstants.defaultBorderColor,        
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,  
        flexDirection: 'row',
        alignItems: 'center',              
    }
});