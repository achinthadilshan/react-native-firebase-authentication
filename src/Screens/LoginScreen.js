import {
   KeyboardAvoidingView,
   StyleSheet,
   Text,
   View,
   TextInput,
   Pressable,
} from 'react-native'
import React, { useState } from 'react'
import {
   signInWithEmailAndPassword,
   createUserWithEmailAndPassword,
} from 'firebase/auth'
import { auth } from '../../firebase'

const LoginScreen = () => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [confirmPassword, setConfirmPassword] = useState('')
   const [switchMethod, setSwitchMethod] = useState(false)

   const switchMethodHandler = () => {
      setSwitchMethod(!switchMethod)
   }

   const loginHandler = () => {
      if (switchMethod) {
         createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
               const user = userCredential.user
               console.log(user.email)
            })
            .catch((error) => {
               console.log(error.message)
            })
      } else {
         signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
               const user = userCredential.user
               console.log(user.email)
            })
            .catch((error) => {
               console.log(error.message)
            })
      }
   }

   return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
         <View style={styles.inputConatiner}>
            <TextInput
               value={email}
               onChangeText={(text) => setEmail(text)}
               placeholder="Email"
               style={styles.input}
               autoCapitalize="none"
            />
            <TextInput
               value={password}
               onChangeText={(text) => setPassword(text)}
               placeholder="Password"
               style={styles.input}
               secureTextEntry
            />
            {switchMethod && (
               <TextInput
                  value={confirmPassword}
                  onChangeText={(text) => setConfirmPassword(text)}
                  placeholder="Confirm Password"
                  style={styles.input}
                  secureTextEntry
               />
            )}
         </View>
         <View style={styles.buttonContainer}>
            <Pressable
               onPress={loginHandler}
               style={[styles.button, { backgroundColor: '#0095F6' }]}>
               <Text style={{ color: '#fff' }}>
                  {switchMethod ? `Register` : `Login`}
               </Text>
            </Pressable>
            <Pressable
               onPress={switchMethodHandler}
               style={[styles.button, styles.buttonOutline]}>
               <Text>
                  {switchMethod
                     ? `Already have an account? Login`
                     : `Don't have an account? Register`}
               </Text>
            </Pressable>
         </View>
      </KeyboardAvoidingView>
   )
}

export default LoginScreen

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   inputConatiner: {
      width: '90%',
   },
   input: {
      backgroundColor: '#fff',
      paddingVertical: 15,
      paddingHorizontal: 10,
      borderRadius: 5,
      marginVertical: 5,
   },
   buttonContainer: {
      width: '90%',
      marginTop: 30,
   },
   button: {
      width: '100%',
      padding: 15,
      borderRadius: 5,
      marginVertical: 5,
      alignItems: 'center',
   },
})
