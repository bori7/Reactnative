
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer,   } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {  SafeAreaView, StatusBar, StyleSheet, } from 'react-native';
import {News} from './src/components/news'
import {HomeScreen} from './src/components/home';
import {ContactScreen} from './src/components/contact';
import {LocationScreen} from './src/components/location';


const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];


const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="News" component={News} />
    </HomeStack.Navigator>
  );
}


export default function App() {

  return (
    
    
    <SafeAreaView style={styles.container} >

        <StatusBar
          animated={true}
          backgroundColor="#fff"
          barStyle={STYLES[1]}
          showHideTransition={TRANSITIONS[0]}
          hidden={false} />


      <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                  iconName =  focused? 'home': 'home-outline';
                } else if (route.name === 'News') {
                  iconName =  focused? 'newspaper':'newspaper-outline';
                }else if (route.name === 'Location') {
                  iconName =  focused? 'location':'location-outline';
                }else if (route.name === 'Contact') {
                  iconName = focused? 'person':'person-outline';
                }  

                return <Ionicons name={iconName} size={size} color='black' />;
              },
            })}
            tabBarOptions={{
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
            }}
          >
            <Tab.Screen name="Home" component={HomeStackScreen}  options={{ title: '' }} />
            <Tab.Screen name="News" component={News}  options={{ title: '' }} />
            <Tab.Screen name="Location" component={LocationScreen}  options={{ title: '' }} />
            <Tab.Screen name="Contact" component={ContactScreen}   options={{ title: '' }}/>
            
            
          </Tab.Navigator>
        </NavigationContainer>
    </SafeAreaView>


    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  buttonsContainer: {
    padding: 10
  },
  textStyle: {
    textAlign: 'center',
    marginBottom: 8
  }
});

