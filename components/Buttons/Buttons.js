import React from 'react'
import { View, Text, TouchableOpacity,Image } from 'react-native'
import style from "./Style";
export default function Button(props) {
    const {text ,icon,disabled,btnStyle,btnTextStyle,onPress}=props;
    
    return (
        <TouchableOpacity 
       activeOpacity={0.5}
        onPress={onPress}
        disabled={disabled}
        style={[style.btnContainer,btnStyle]}
        >
            {text && <Text
               style={[ style.btnText, btnTextStyle, {marginRight:icon? 10:0}]}
                >{text}</Text>}
            {icon && <Image
                style={ style.iconStyle}
                source={icon} resizeMode="contain"/>}
            </TouchableOpacity> 
    );
}
