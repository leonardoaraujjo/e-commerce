import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function SizeButtom(props) {
 return (
   <View style={[styles.container, { backgroundColor: props.bgColor || '#FFF'}]}>
    <Text style={[styles.text, {color: props.color || '#ddd'}]}>{props.children}</Text>
   </View>
 );
}

const styles = StyleSheet.create({
    container:{
        width: 150,
        height: 50, 
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: '#e6e6e6',
        borderWidth: 3,
        marginHorizontal: 10
    }, 
    text:{
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        textAlignVertical: 'center'
    }
})