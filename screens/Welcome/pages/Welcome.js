import React,{useState, useEffect} from "react";
import {SafeAreaView, Text, View} from "react-native";
import style from "../Style";
import { Button } from "../../../components";

export default function Welcome(props)
{
const {navigation}=props;
const [visible,setVisible]=useState(false);

useEffect(()=>{
setTimeout(()=>{
    setVisible(true);
},2000);
},[]);

    return(
        <SafeAreaView style={style.container} >
        <View style={style.mainView}>
        <Text style={style.textStyle}>
        CoinBase App
        </Text>
        <Text style={style.textStyle}>
        Made | Awais | Clone
        </Text>
    {visible
    &&
    <View style={style.bottomView}>
    <Button text="Get Started" disable="false"
    btnStyle={style.btnStyle}
    btnTextStyle={style.btnTextStyle}
    />
    <Button  text="Sign In" disable="false" 
    btnStyle={style.btnStyle2}

    onPress={()=>navigation.navigate('Login')}/>
   
    </View>
    }
        
    
        
           
           </View>
        </SafeAreaView>
    );
}