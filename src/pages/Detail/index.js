import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import Dot from '../../components/Dot';
import SizeButtom from '../../components/SizeButtom';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

export default function Detail({ navigation }) {

  navigation.setOptions({
    headerTitle: 'Nike Downshifter 10'
  })

 return (
   <ScrollView style={styles.container}>
    <Image 
    source={require('../../assets/detail.png')}
    style={styles.image}
    resizeMode='cover'
    />

    <View>
      <View>
        <Text style={[styles.title, {fontSize: 24} ]}>R$ 280,90</Text>
      </View>
      <View opacity={0.4}>
        <Text style={[styles.title, {fontSize: 30} ]}>Nike Downshifter 10</Text>
      </View>

      <View style={styles.dotContainer}>
        <Dot color="#2379f4"/>
        <Dot color="#ff0053"/>
        <Dot color="#ddd"/>
        <Dot color="#000"/>
      </View>

      <View style={{flexDirection: 'row', width: '100%'}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <SizeButtom>39</SizeButtom>
          <SizeButtom bgColor="#17181A" color="#fff">40</SizeButtom>         
          <SizeButtom>41</SizeButtom>
          <SizeButtom>42</SizeButtom>
        </ScrollView>
      </View>

      <View style={styles.textContext}>
        <Text style={styles.textTitle}>Nike Downshifter 10</Text>
        <Text style={styles.textContext}>O novo Nike Downshifter 10 proporciona um suporte leve e flexível para manter você em movimento. Ele continua com o mesmo amortecimento macio da última versão e acrescenta mais suporte ao redor do mediopé para torná-lo confortável para seu uso durante seus treinos ou no seu dia a dia</Text>
        <Text style={styles.textList}> - Categoria: Amortecimento</Text>
        <Text style={styles.textList}> - Material: Mesh</Text>
      </View>

      <Button />

      <View style={styles.line}/>

      <Footer/>
      
    </View>
   
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  image:{
    width: '100%'
  },
  title:{
    fontFamily: 'Anton_400Regular',
    paddingHorizontal: '2%'
  },
  dotContainer:{
    flexDirection: 'row',
    marginVertical: '7%'
  }, 
  textContext:{
    fontSize: 16,
    lineHeight: 25,
    marginVertical: '2%',
    marginHorizontal: '2%'
  },
  textTitle:{
    fontSize: 22,
    marginVertical: '2%'
  },
  textList:{
    fontSize: 16,
    lineHeight: 25
  },
  line:{
    borderWidth: 1,
    borderBottomColor: '#DDD',
    marginVertical: '2%'
  }
})