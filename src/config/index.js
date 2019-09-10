//this allows us to import from config and at compile time we have them included in the bundle
export default {
    images: {
        heartIcon: require('../../assets/icons/heart-50.png'),
        chatIcon: require('../../assets/icons/chat-50.png'),
        arrowIcon: require('../../assets/icons/arrow-50.png'),
    },
    stylesConstants: {
        rowHeight: 50,
        defaultBorderColor: "rgb(200,200,200)",
    }
};