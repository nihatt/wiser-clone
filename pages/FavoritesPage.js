import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppHeader from '../components/AppHeader';
import FabButton from '../components/FabButton';

export default function FavoritesPage() {
  return (
    <View style={styles.container}>
         <AppHeader/>
      <Text>Favoriler Sayfası</Text>
      <FabButton></FabButton>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
