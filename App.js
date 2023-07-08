import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import CategoriesScreen from './screens/CategoriesScreen'
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (   
    <>
    <StatusBar style="light"/>

    <NavigationContainer>
      <Stack.Navigator>
        {/* Name of the screen, component serves the screen, not JSX just a pointer at the component function */}
        <Stack.Screen name="MealsCategories" component={CategoriesScreen}/>
        <Stack.Screen name='MealsOverview' component={MealsOverviewScreen}/>
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
