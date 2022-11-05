import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppHeader from '../components/AppHeader';
import FabButton from '../components/FabButton';
import PostCard from '../components/PostCard';

export default function FeedPage() {
  return (
    <View style={styles.container}>
         <AppHeader/>
      <PostCard></PostCard>
      <FabButton></FabButton>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',

  },
});
