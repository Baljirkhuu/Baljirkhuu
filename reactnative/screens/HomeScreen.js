import { View, Text, Button } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View>
      <Text>HomeScreen</Text>
        <Button title='Login' onPress={ () => navigation.navigate("Login")}/>
        <Button title='FlexBox' onPress={ () => navigation.navigate("Flexbox")}/>
        <Button title='HomeWork' onPress={ () => navigation.navigate("HomeWork")}/>
    </View>
  )
}

export default Home