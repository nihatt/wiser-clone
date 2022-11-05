import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AnimatedSplash from "react-native-animated-splash-screen";
import AddPost from './pages/AddPost';
import FeedPage from './pages/FeedPage';
import FavoritesPage from './pages/FavoritesPage';
import { useFonts } from 'expo-font';
import { Ionicons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoadedApp, setFontsLoadedApp] = React.useState(false)
  async function loadFonts() {
    await Font.loadAsync({
      "Comfortaa": require('./assets/fonts/Comfortaa-VariableFont_wght.ttf'),
      "Cormorant-Italic": require('./assets/fonts/Cormorant-Italic-VariableFont_wght.ttf'),
      "Cormorant-Variable": require('./assets/fonts/Cormorant-VariableFont_wght.ttf'),
      "Dosis-Variable": require('./assets/fonts/Dosis-VariableFont_wght.ttf'),
      "Faustina-Italic": require('./assets/fonts/Faustina-Italic-VariableFont_wght.ttf'),
      "Kolker-Regular": require('./assets/fonts/KolkerBrush-Regular.ttf'),
      "Nunito-Italic": require('./assets/fonts/Nunito-Italic-VariableFont_wght.ttf'),
      "Nunito-Variable": require('./assets/fonts/Nunito-VariableFont_wght.ttf'),
    });
    setFontsLoadedApp(true)
  }

  const [fontsLoaded] = useFonts({
    "Comfortaa": require('./assets/fonts/Comfortaa-VariableFont_wght.ttf'),
    "Cormorant-Italic": require('./assets/fonts/Cormorant-Italic-VariableFont_wght.ttf'),
    "Cormorant-Variable": require('./assets/fonts/Cormorant-VariableFont_wght.ttf'),
    "Dosis-Variable": require('./assets/fonts/Dosis-VariableFont_wght.ttf'),
    "Faustina-Italic": require('./assets/fonts/Faustina-Italic-VariableFont_wght.ttf'),
    "Kolker-Regular": require('./assets/fonts/KolkerBrush-Regular.ttf'),
    "Nunito-Italic": require('./assets/fonts/Nunito-Italic-VariableFont_wght.ttf'),
    "Nunito-Variable": require('./assets/fonts/Nunito-VariableFont_wght.ttf'),

  });
  if (!fontsLoaded) {
    loadFonts
    return (
      <AnimatedSplash
        translucent={true}
        isLoaded={fontsLoaded}
        logoImage={require("./assets/images/wiserlogosplash.png")}
        backgroundColor={"white"}
        logoHeight={300}
        logoWidth={300}
      >
      </AnimatedSplash>
    )

  }
  return (
    <AnimatedSplash
      translucent={true}
      isLoaded={fontsLoaded}
      logoImage={require("./assets/images/wiserlogosplash.png")}
      backgroundColor={"white"}
      logoHeight={300}
      logoWidth={300}
    >
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="AddPost" options={{
            tabBarIcon: (tabInfo) => {
              return (
                <View style={{ justifyContent: 'flex-end' }}>
                  <Ionicons
                    name={!tabInfo.focused ? "chatbox-ellipses-outline" : "chatbox-ellipses"}
                    size={32}
                    color={tabInfo.focused ? "black" : "#8e8e93"}
                  />
                </View>
              );
            },
            tabBarShowLabel: false
          }} component={AddPost} />


          <Tab.Screen name="Feed" options={{
            tabBarIcon: (tabInfo) => {
              return (
                <View style={{ justifyContent: 'flex-end' }}>
                  <Ionicons

                    name={!tabInfo.focused ? "albums-outline" : "albums"}
                    size={32}
                    color={tabInfo.focused ? "black" : "#8e8e93"}
                  />
                </View>
              );
            },
            tabBarShowLabel: false
          }} component={FeedPage} />

          <Tab.Screen name="Favorites" options={{
            tabBarIcon: (tabInfo) => {
              return (
                <View style={{ justifyContent: 'flex-end' }}>
                  <Ionicons

                    name={!tabInfo.focused ? "heart-outline" : "heart"}
                    size={32}
                    color={tabInfo.focused ? "black" : "#8e8e93"}
                  />
                </View>
              );
            },
            tabBarShowLabel: false
          }} component={FavoritesPage} />




        </Tab.Navigator>
      </NavigationContainer>
    </AnimatedSplash>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
