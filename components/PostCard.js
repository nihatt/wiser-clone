import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, FlatList, Alert,RefreshControl } from 'react-native';
import AppHeader from '../components/AppHeader';
import FabButton from '../components/FabButton';
import { useFonts } from 'expo-font';
import * as React from 'react';
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
} from "react-native-responsive-dimensions";
import { Avatar } from 'react-native-paper';
import { IconButton, MD3Colors } from 'react-native-paper';
import CategoriesCard from './CategoriesCard';
import { BottomSheet, ListItem } from '@rneui/themed';
import { Icon } from '@rneui/themed';
import { Button, Snackbar } from 'react-native-paper';



export default function PostCard(props) {
    const [fontsLoaded, setFontsLoaded] = React.useState(false)

    [fontsLoaded] = useFonts({
        "Comfortaa": require('../assets/fonts/Comfortaa-VariableFont_wght.ttf'),
        "Cormorant-Italic": require('../assets/fonts/Cormorant-Italic-VariableFont_wght.ttf'),
        "Cormorant-Variable": require('../assets/fonts/Cormorant-VariableFont_wght.ttf'),
        "Dosis-Variable": require('../assets/fonts/Dosis-VariableFont_wght.ttf'),
        "Faustina-Italic": require('../assets/fonts/Faustina-Italic-VariableFont_wght.ttf'),
        "Kolker-Regular": require('../assets/fonts/KolkerBrush-Regular.ttf'),
        "Nunito-Italic": require('../assets/fonts/Nunito-Italic-VariableFont_wght.ttf'),
        "Nunito-Variable": require('../assets/fonts/Nunito-VariableFont_wght.ttf'),

    });
    const [visible, setVisible] = React.useState(false);
    const [isVisible, setIsVisible] = React.useState(false);
    const [snackvisible, snacksetVisible] = React.useState(false);

    const onToggleSnackBar = () => snacksetVisible(!snackvisible);

    const onDismissSnackBar = () => snacksetVisible(false);


    const setFavorite = async (postId) => {
        try {
          let response = await fetch("https://6367183bf5f549f052d04548.mockapi.io/wiser/posts/"+postId, {
                method: "PUT",
                body: JSON.stringify({
                    "isfavorite":true
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            let responseJson = await response.json();
            if(response.status==200){
                snacksetVisible(true);
            }
            else{
                Alert.alert("Sanki bir hata oldu da cidden ekleyemedik :(")
            }

                
                
        } catch (error) {
            Alert.alert(error + "API Error")
        }
    }

    const deletePost = async (postId) => {
        try {
          let response = await fetch("https://6367183bf5f549f052d04548.mockapi.io/wiser/posts/"+postId, {
                method: "DELETE",

                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            let responseJson = await response.json();
            props.refresh();
        } catch (error) {
            Alert.alert(error + "API Error")
        }
    }
    const list = [
        {
            title: 'Favorilere Ekle !',
            onPress: () => { setIsVisible(false), setFavorite(props.id) },
        },
        {
            title: 'Postu Sil',
            onPress: () => { setIsVisible(false), deletePost(props.id) },
        },
        {
            title: 'İptal',
            containerStyle: { backgroundColor: 'red' },
            titleStyle: { color: 'white' },
            onPress: () => { setIsVisible(false), console.log(props.id) },
        },
    ];
    const renderItem = ({ item }) => (
        <CategoriesCard categoryname={item}></CategoriesCard>
    );

    const itemColour = (text) => {
        if (text == "youtube") {
            return "red"
        }
        else if (text == "spotify") {
            return "green"
        }
        else {
            return "blue"
        }
    }
    return (
        <View style={styles.container}>
            <View style={{ height: responsiveScreenHeight(52), backgroundColor: 'white' }}>
                <View style={{ height: responsiveScreenHeight(7), justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'row', width: responsiveScreenWidth(100), justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Avatar.Image size={50} style={{ marginLeft: 5, marginRight: 15 }} source={{ uri: props.avatar }} />
                            <View style={{ flexDirection: 'column', justifyContent: 'center', alignSelf: 'center' }}>
                                <Text style={{ fontWeight: '700', fontSize: 18 }}>{props.name}   <Text style={{ fontSize: 12, color: 'grey' }}>45m</Text></Text>
                                <Text style={{ fontFamily: 'Comfortaa' }}>{props.job}</Text>
                            </View>
                        </View>
                        <IconButton
                            icon="dots-horizontal"
                            iconColor="black"
                            size={32}
                            onPress={() => setIsVisible(true)}
                        />
                    </View>

                </View>


                <View style={{ height: responsiveScreenHeight(6), padding: 5 }}>
                    <ScrollView>
                        <Text numberOfLines={2}>{props.description}</Text>
                    </ScrollView>
                </View>


                <View style={{ height: responsiveScreenHeight(32), justifyContent: 'center' }}>
                    <View style={{ height: responsiveScreenHeight(30), width: responsiveScreenWidth(95), borderWidth: 1, borderColor: 'rgb(215,218,223)', alignSelf: 'center' }}>
                        <View style={{ flexDirection: 'column' }}>
                            <View style={{ height: responsiveScreenHeight(18) }}>
                                <Image
                                    resizeMode='cover'
                                    style={{ flex: 1 }}
                                    source={{
                                        uri: props.image,
                                    }}
                                />
                            </View>
                            <View style={{ height: responsiveScreenHeight(9), flexDirection: 'column', justifyContent: 'space-around' }}>
                                <Text style={{ fontFamily: 'Dosis-Variable', fontSize: 16, fontStyle: "italic", color: 'grey' }}>This contend is shared via <Text style={{ color: itemColour(props.sharedvia) }}>{props.sharedvia}</Text></Text>
                                <Text numberOfLines={2} style={{ fontWeight: 'bold', fontSize: 20, flexWrap: 'wrap' }}>{props.title}</Text>
                            </View>
                        </View>
                    </View>
                </View>


                <View style={{ height: responsiveScreenHeight(6), paddingLeft: 6, flexDirection: 'row' }}>
                    <FlatList
                        horizontal={true}
                        data={props.categorydata}
                        renderItem={renderItem}
                        keyExtractor={item => item}
                    />
                </View>
            </View>
            <BottomSheet modalProps={{}} isVisible={isVisible}>
                {list.map((l, i) => (
                    <ListItem
                        key={i}
                        containerStyle={l.containerStyle}
                        onPress={l.onPress}
                    >
                        <ListItem.Content>
                            <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>

                        </ListItem.Content>
                    </ListItem>
                ))}
            </BottomSheet>
            <Snackbar
                visible={snackvisible}
                duration={5000}
                onDismiss={onDismissSnackBar}>
                Bu post favorilere eklendi, ya da eklenmedi mi?
            </Snackbar>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

        backgroundColor: '#fff',
        marginBottom: 20


    },
});
