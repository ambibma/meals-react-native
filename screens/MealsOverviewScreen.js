import { StyleSheet, Text, View, FlatList, Pressable } from 
'react-native'
import { useLayoutEffect } from 'react';
import { MEALS, CATEGORIES} from '../data/dummy-data'
import { useRoute } from '@react-navigation/native';
import Meal from '../models/meal';
import MealItem from '../components/MealItem';

export default function MealsOverviewScreen({route, navigation}) {
  const catId = route.params.categoryId;
  const mealId = route.params.mealsId;
  
  const displayedMeals = MEALS.filter((mealItem)=> {
    return mealItem.categoryIds.indexOf(catId ) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id ===catId).title;
  
    navigation.setOptions({
        title: categoryTitle
    })
    
    
  }, [catId, navigation])


  function renderMealItem(itemData) {
    // function pressHandler(){
    //   navigation.navigate('MealDetails',{
    //    mealId: itemData.id,
    //   })
    
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <MealItem {...mealItemProps}/>
  }

  return (
    <View style={styles.container}>
  
      <FlatList data={displayedMeals}
      keyExtractor={(item) => item.id}
      renderItem={renderMealItem} />

 


  
      <Text>Meals Overview Screen - {catId}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
})