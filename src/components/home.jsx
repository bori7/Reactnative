import React from 'react';
import {  Button, View, Text } from 'react-native';


export  const HomeScreen = ({ navigation }) => {
 
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home </Text>
        <Button
          title="Go to News"
          onPress={() => navigation.navigate('News')}
        />
      </View>
    );
  }

