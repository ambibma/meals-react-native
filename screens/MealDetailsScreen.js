import { useLayoutEffect, useContext } from 'react';
import { StyleSheet, Text, View , Image, ScrollView, Button} from 'react-native'
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import React from 'react'
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';
import { FavoritesContext } from '../store/context/favorites-context';

export default function MealDetailsScreen({route, navigation}) {
 const favoriteMealsCtx = useContext(FavoritesContext);
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId)

  const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);

  function changeFavoriteStatusHandler(){
      if(mealIsFavorite) {
        favoriteMealsCtx.removeFavorite(mealId);
        
      } else {
        favoriteMealsCtx.addFavorite(mealId);
       
      }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton 
        icon={mealIsFavorite ? 'star' : 'star-outline'}
        color= 'white' 
        onPress={changeFavoriteStatusHandler}/>
      }
    })

  }, [navigation, changeFavoriteStatusHandler])

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{uri: selectedMeal.imageUrl}}/>
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails 
      duration={selectedMeal.duration} 
      complexity={selectedMeal.complexity} 
      affordability={selectedMeal.affordability}
      textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
         <List data={selectedMeal.ingredients}/>
         <Subtitle>steps</Subtitle>
         <List data={selectedMeal.steps}/>
      </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,

  },
  title: {
    fontWeight: "bold",
    margin : 8,
    fontSize: 24,
    textAlign: "center",
    color: '#772222',
  },

  detailText:{
    color: '#680f0f',
  },
  listContainer: {
    maxWidth: '80%',
  },
  listOuterContainer: {
    alignItems: 'center'
  }


})