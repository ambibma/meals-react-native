import { StyleSheet, } from 
'react-native'
import { useLayoutEffect } from 'react';
import { MEALS, CATEGORIES} from '../data/dummy-data'
import { useRoute } from '@react-navigation/native';
import Meal from '../models/meal';
import MealItem from '../components/MealsList/MealItem';
import MealsList from '../components/MealsList/MealsList';

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

    return <MealsList items={displayedMeals}/>
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
})