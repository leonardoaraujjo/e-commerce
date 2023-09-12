import React from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import Shoes from '../Shoes';


export default function Footer() {
 return (
   <View>
        <Text style={styles.title}>VOCÊ TAMBÉM PODE GOSTAR</Text>
        <View style={{flexDirection: 'row'}}>
         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{marginHorizontal: 10}}>
            <Shoes img={require('../../assets/1.png')} cost="140,90">
                Nike Air Max
            </Shoes>
        </View>
        <View style={{marginHorizontal: 10}}>
            <Shoes img={require('../../assets/3.png')} cost="560,90">
                Nike Squidward Tentacles
            </Shoes>
        </View><View style={{marginHorizontal: 10}}>
            <Shoes img={require('../../assets/4.png')} cost="220,90">
                Nike Epic React Flyk
            </Shoes>
        </View>
        <View style={{marginHorizontal: 10}}>
            <Shoes img={require('../../assets/5.png')} cost="390,90">
                Nike Joyride Run
            </Shoes>
        </View>
        <View style={{marginHorizontal: 10}}>
            <Shoes img={require('../../assets/6.png')} cost="920,90">
                Nike Pegasus
            </Shoes>
        </View>
        </ScrollView>
    </View>
   </View>
  );
}

const styles = StyleSheet.create({
    title:{
        fontFamily: 'Anton_400Regular',
        fontSize: 24,
        marginVertical: '2%',
        paddingHorizontal: '2%'
    }
})