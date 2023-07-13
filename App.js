import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import {Ionicons} from '@expo/vector-icons'
import CategoriesScreen from './screens/CategoriesScreen'
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetails from './screens/MealDetailsScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import FavoritesScreen from './screens/FavoritesScreen';


const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return <Drawer.Navigator
  screenOptions={{      
    headerStyle: {backgroundColor: '#ff7a60'},
    headerTintColor: 'white',
    sceneContainerStyle: {backgroundColor: '#ffffff'},
    drawerContentStyle: {backgroundColor: '#ee9191cc'},
    drawerInactiveTintColor: 'white',
    drawerActiveTintColor: '#af0808',
    drawerActiveBackground: "#5b7ac8cc"
  }}>
  
    
    <Drawer.Screen name="Categories" component={CategoriesScreen}
    options={{
      title: 'All Categories',
      drawerIcon: ({color,size}) => (<Ionicons color={color} size={size} name= 'list'/>
      )
    }}
    />
    <Drawer.Screen name="Favorites" component={FavoritesScreen} 
    options={{
      title: 'All Categories',
      drawerIcon: ({color,size}) => (<Ionicons color={color} size={size} name= 'star'/>
      )
    }}
    />
  </Drawer.Navigator>
 }

export default function App() {
  return (   
    <>
    <StatusBar style="light"/>

    <NavigationContainer>
      <Stack.Navigator screenOptions={{
      
          headerStyle: {backgroundColor: '#ff8243'},
          headerTintColor: 'white',
          contentStyle: {backgroundColor: '#f2f2f2'}
        }}>
        {/* Name of the screen, component serves the screen, not JSX just a pointer at the component function */}
        {/* Nested screen with drawer navigator */}
        <Stack.Screen name="DrawerScreen" 
        component={DrawerNavigator}
        options={{
          // title: 'All Categories',
          headerShown: false,
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
        options={{
          title: 'About the Meal',
        }}        
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
