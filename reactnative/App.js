import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import FlexScreen from './screens/FlexScreen';
import HomeWork from './screens/HomeWork';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
  const clickHandler = () => Alert.alert("sain baina uu");
  const Stack = createNativeStackNavigator();
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName = "Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Flexbox" component={FlexScreen} />
          <Stack.Screen name="HomeWork" component={HomeWork} />
        </Stack.Navigator>
      </NavigationContainer>
      /*<View style={css.container}>
        <Text style={{color: "blue"}}>h1 ,how are you</Text>
        <Text style={css.myText}>hi, How are you</Text>

        <TouchableOpacity style={css.button} onPress={clickHandler}>
          <Text style={css.myText}>hi, How are you</Text>
          <Text style={css.myText}>hi, How are you</Text>
        </TouchableOpacity>

        <Button title='button' onPress={clickHandler}/>
      </View>*/
  );
}

const css = StyleSheet.create({
  container: {
    margin: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
  },
  myText: {
    fontSize: 30,
  },
  button: {
    padding: 10,
    marginVertical: 10,
    borderRadius: 0,
    borderWidth: 1,
    borderColor: 'aqua',
    backgroundColor: 'aqua',
  },
});
