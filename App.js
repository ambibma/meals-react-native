import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import CategoriesScreen from './screens/CategoriesScreen'
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetails from './screens/MealDetailsScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (   
    <>
    <StatusBar style="light"/>

    <NavigationContainer>
      <Stack.Navigator screenOptions={{
      
          headerStyle: {backgroundColor: '#ff8243'},
          headerTintColor: 'white',
          contentStyle: {backgroundColor: '#5b2525'}
        }}>
        {/* Name of the screen, component serves the screen, not JSX just a pointer at the component function */}
        <Stack.Screen name="MealsCategories" 
        component={CategoriesScreen}
        options={{
          title: 'All Categories'
        }}
        />
        <Stack.Screen name='MealsOverview' 
        component={MealsOverviewScreen}
        // options={({route, navigation}) => {
        //   const catId = route.params.categoryId;
        //   return {
        //     title: catId,
        //   }
        // }}
        />
        <Stack.Screen name='MealDetailsScreen'
        component={MealDetailsScreen}        
        />
      </Stack.Navigator>
    </NavigationContainer>
    
    
    </>  

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#591d1d',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
