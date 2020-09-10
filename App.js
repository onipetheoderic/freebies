import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./navigation/DrawerNavigation";
import { AppLoading } from 'expo';
import { CounterContextProvider } from "./store";
import { Root } from "native-base";

import {
  useFonts,
  Nunito_400Regular,
  Lato_400Regular,
  Inter_900Black,
  Pacifico_400Regular,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Bangers_400Regular,
  Kalam_400Regular
} from '@expo-google-fonts/dev';

 const App = () => {
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Lato_400Regular,
    Inter_900Black,
    Pacifico_400Regular,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Bangers_400Regular,
    Kalam_400Regular
  });
    if (!fontsLoaded) {
      return <AppLoading />;
    } else {
  return (
    <CounterContextProvider initialValue="Theoderic App">
      <Root>
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
      </Root>
    </CounterContextProvider>
  );
    }
}
export default App;