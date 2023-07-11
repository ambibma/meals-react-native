import { Pressable, StyleSheet, Text, View, Image, Platform } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'
import MealDetails from './MealDetails';

export default function MealItem({id,title, imageUrl, duration, complexity, affordability, onPress}) {
  const navigation = useNavigation();

  function selectMealHandler(){
    navigation.navigate('MealDetailsScreen',{
      mealId: id
    });

  }

 
  return (
    <View style={styles.mealItem}>
      <Pressable android_ripple={{color: '#ccc'}}  
      style={ ({pressed}) => 
      
      pressed ? styles.buttonPressed : null      
      }
      onPress={selectMealHandler}
      >
        <View style={styles.innerContainer}>
         <Image source={{uri: imageUrl}} style={styles.image}>
          </Image> 
          <Text style={styles.title}>{title}</Text>
        </View>
        <View>
        </View>
        <MealDetails 
        duration={duration} 
        affordability={affordability} 
        complexity={complexity} />
     
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,

    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: .35,
    shadowOffset: {width: 0, height: 2, },
    shadowRadius: 18,
    overflow:  Platform.OS === 'android' ? 'hidden' :'visible',
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: 200,
  },
  buttonPressed: {
    opacity: .5,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },
  
})