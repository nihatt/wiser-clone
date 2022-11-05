import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppHeader from '../components/AppHeader';
import FabButton from '../components/FabButton';
export default function AddPost() {
    const [fontsLoaded] = useFonts({
        "Comfortaa":require('../assets/fonts/Comfortaa-VariableFont_wght.ttf'),
        "Cormorant-Italic":require('../assets/fonts/Cormorant-Italic-VariableFont_wght.ttf'),
        "Cormorant-Variable":require('../assets/fonts/Cormorant-VariableFont_wght.ttf'),
        "Dosis-Variable":require('../assets/fonts/Dosis-VariableFont_wght.ttf'),
        "Faustina-Italic":require('../assets/fonts/Faustina-Italic-VariableFont_wght.ttf'),
        "Kolker-Regular":require('../assets/fonts/KolkerBrush-Regular.ttf'),
        "Nunito-Italic":require('../assets/fonts/Nunito-Italic-VariableFont_wght.ttf'),
        "Nunito-Variable":require('../assets/fonts/Nunito-VariableFont_wght.ttf'),
          
      });
  return (
    <View style={styles.container}>
        <AppHeader/>
              <Text style={{fontFamily:'Comfortaa'}}>Add Post Sayfası</Text>
              <StatusBar style="auto" />
     <FabButton></FabButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
