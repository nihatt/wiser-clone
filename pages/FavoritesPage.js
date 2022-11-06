
import * as React from 'react'
import { StyleSheet, Text, View, FlatList, Image, StatusBar, RefreshControl } from 'react-native';
import AppHeader from '../components/AppHeader';
import FabButton from '../components/FabButton';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import PostCard from '../components/PostCard';
import { Header as HeaderRNE, HeaderProps, Icon } from '@rneui/themed';
import { BottomSheet, Button, ListItem } from '@rneui/themed';
import { responsiveHeight, responsiveScreenHeight, responsiveWidth } from 'react-native-responsive-dimensions';




export default function FavoritesPage(props) {



  const [incomingData, setIncomingData] = React.useState([]);
  const [filteredincomingData, setFilteredIncomingData] = React.useState([]);
  const [status, setStatus] = React.useState(500);
  const [refreshing, setRefreshing] = React.useState(false);
  const getData = async () => {

    try {
      let response = await fetch(
        'https://6367183bf5f549f052d04548.mockapi.io/wiser/posts',
      )
      console.log(response.status);
      let responseJson = await response.json();

      setIncomingData(responseJson.filter(i=> i.isfavorite==true));
      setStatus(response.status);
      setRefreshing(false)
      console.log("bizim length");
    } catch (error) {
      Alert.alert(error)
    }

  }
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getData();
  }, []);

  React.useEffect(() => {
    getData();

  }, []);
  React.useEffect(() => console.log("re-render because x changed:", incomingData.length), [incomingData])
  React.useEffect(() => console.log("re-render because x changed:", filteredincomingData.length), [filteredincomingData])
 console.log(filteredincomingData.length);
  const renderItem = ({ item }) => (
    <PostCard refresh={() => onRefresh()} id={item.id} categorydata={item.categories} name={item.name} job={item.job} avatar={item.avatar} title={item.title} description={item.description} image={item.image} sharedvia={item.sharedvia} />
  );
  const EmptyListMessage = ({ item }) => (
    
    <View style={{ justifyContent: 'center', alignItems: 'center', height: responsiveScreenHeight(90), backgroundColor: 'white', paddingBottom: StatusBar.currentHeight }}>

      <Text>Upss... Sanırım bir şeyler yok </Text>
      <Image
        style={{ height: responsiveHeight(30), width: responsiveWidth(90), resizeMode: 'contain' }}
        source={{ uri: 'https://media2.giphy.com/media/xFpT7lMV5Mkqq0E6YM/giphy.gif' }} />
    </View>
  );

  if (status != 200) {
    return (
      <View>
        <View>
        <HeaderRNE
      backgroundColor='black'
      containerStyle={{backgroundColor:'black'}}
      centerComponent={{ text: 'Wiser', style: styles.heading }}
    />
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', height: responsiveHeight(90) }}>
          <ActivityIndicator style={{}} animating={true} color={MD2Colors.red800} />
        </View>
      </View>
    )
  }
  return (
    <View style={{flex:1}}>

      <HeaderRNE
      backgroundColor='black'
      containerStyle={{backgroundColor:'black'}}
      centerComponent={{ text: 'Wiser', style: styles.heading }}
    />

      <FlatList
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        ListEmptyComponent={EmptyListMessage}
        data={incomingData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      <FabButton></FabButton>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',

  },
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',

  },

});
