import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './src/screens/HomeScreen';
import CalculatorScreen from './src/screens/CalculatorScreen';
import { colors } from './src/theme/colors';

const Stack = createNativeStackNavigator();
const theme = { ...DarkTheme, colors: { ...DarkTheme.colors, background: colors.background, card: colors.background, text: colors.text } };
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }} edges={['top', 'bottom']}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator initialRouteName="Inicio" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Inicio" component={HomeScreen} />
            <Stack.Screen name="Calculadora" component={CalculatorScreen} />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="light" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
