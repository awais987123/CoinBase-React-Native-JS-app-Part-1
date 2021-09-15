import React from 'react';
import { View, Text, SafeAreaView, ScrollView} from 'react-native';
import {Button} from "../../../components/Buttons/Buttons";
export default function Login() {
    return (
        <SafeAreaView>
        <ScrollView>
        <View>
        <Text>
        Sign in to CoinBase
        </Text>
        </View>
        <View>
        <Button text="Sign In" disable={false}/>
        </View>
        
        </ScrollView>
        </SafeAreaView>
        )
}
