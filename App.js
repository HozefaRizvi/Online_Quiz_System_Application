import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Importing Screens
import { HomeScreen } from "./Screens/HomeScreen";
import { DatabaseQuiz } from "./Screens/QuizScreen";
import { LoginScreen } from "./Screens/LoginScreen";
import { SignupScreen } from "./Screens/SignupScreen";
import { SelectSubjectScreen } from "./Screens/SelectedSubject";
import { ScoreScreen } from "./Screens/CheckScores";
import { Answers } from "./Screens/Answers";
import { CorrectOptions } from "./Screens/CorrectOptions";
const Stack = createNativeStackNavigator();
const App = () => {
   return(
    <NavigationContainer>
    <Stack.Navigator>
     <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
     <Stack.Screen name="SignUp" component={SignupScreen} options={{headerShown:false}} />
     <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
     <Stack.Screen name="Score" component={ScoreScreen} options={{headerShown:false}} />
     <Stack.Screen name="SelectedSubject" component={SelectSubjectScreen} options={{headerShown:false}} />
     <Stack.Screen name="CorrectOption" component={CorrectOptions} options={{headerShown:false}} />
     <Stack.Screen name="Answer" component={Answers} options={{headerShown:false}} />
     <Stack.Screen name="Quiz" component={DatabaseQuiz} options={{headerShown:false}} /> 
    </Stack.Navigator>
  </NavigationContainer>
   );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor:'#062037',
  },
  
});

export default App;