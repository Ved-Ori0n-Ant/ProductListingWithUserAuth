import React from 'react';
import {WebView} from 'react-native-webview';

const AboutPage = () => {
    return <WebView source={{html: 
        '<h1>Practical 3.</h1><br /><p>Name: Vedant Joshi<br /> First actual react native project!</p>'
    }} />;
};

export default AboutPage;