import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import MealItem from './MealItem';

export default function MealsList({items}) {
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
  
      <FlatList 
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={renderMealItem} />  
      
    </View>
  );
}


const styles = StyleSheet.create({

})