import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './src/Screens/LoginScreen'
import HomeScreen from './src/Screens/HomeScreen'

const Stack = createNativeStackNavigator()

export default function App() {
   return (
      <NavigationContainer>
         <Stack.Navigator>
            {/* <View style={styles.container}>
               <Text>Open up App.js to start working on your app!</Text>
               <StatusBar style="auto" />
            </View> */}
            <Stack.Screen
               options={{ headerShown: false }}
               name="Login"
               component={LoginScreen}
            />
            <Stack.Screen name="Home" component={HomeScreen} />
         </Stack.Navigator>
      </NavigationContainer>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
   },
})
