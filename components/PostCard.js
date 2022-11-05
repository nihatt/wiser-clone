import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
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
    return (
        <View style={styles.container}>
            <View style={{ height: responsiveScreenHeight(55),backgroundColor:'white' }}>
                <View style={{ height: responsiveScreenHeight(7), justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'row', width: responsiveScreenWidth(100), justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Avatar.Image size={50} style={{ marginLeft: 5, marginRight: 15 }} source={require('../assets/images/avatar.png')} />
                            <View style={{ flexDirection: 'column', justifyContent: 'center', alignSelf: 'center' }}>
                                <Text style={{ fontWeight: '700', fontSize: 18 }}>Nihat Pamukçu   <Text style={{ fontSize: 12, color: 'grey' }}>45m</Text></Text>
                                <Text style={{ fontFamily: 'Comfortaa' }}>React Native Developer</Text>
                            </View>
                        </View>
                        <IconButton
                            icon="dots-horizontal"
                            iconColor="black"
                            size={32}
                            onPress={() => console.log('Pressed')}
                        />
                    </View>

                </View>


                <View style={{ height: responsiveScreenHeight(9), padding: 5 }}>
                    <ScrollView>
                        <Text>Qui nisi occaecat veniam exercitation non elit et eu Lorem pariatur commodo deserunt sunt consectetur. Qui esse laborum voluptate nisi voluptate elit. Mollit proident occaecat tempor irure pariatur in est duis est dolor anim in aliqua deserunt.</Text>
                    </ScrollView>
                </View>


                <View style={{ height: responsiveScreenHeight(32), justifyContent: 'center' }}>
                    <View style={{ height: responsiveScreenHeight(30), width: responsiveScreenWidth(95), borderWidth: 1, borderColor: 'rgb(215,218,223)', alignSelf: 'center' }}>
                        <View style={{ flexDirection: 'column' }}>
                            <View style={{  height: responsiveScreenHeight(18) }}>
                                <Text>Resim</Text>
                            </View>
                            <View style={{ height: responsiveScreenHeight(9), flexDirection: 'column', justifyContent: 'space-around' }}>
                                <Text style={{ fontFamily: 'Dosis-Variable', fontSize: 16, fontStyle: "italic", color: 'grey' }}>This contend is shared via youtube</Text>
                                <Text numberOfLines={2} style={{ fontWeight: 'bold', fontSize: 20, flexWrap: 'wrap' }}>Günümüz insan ilişkilerinde sosyal medyanın önemi lorem ipsum dolor sit amet ilişkilerindeilişkilerindeilişkilerindeilişkilerindeilişkilerinde</Text>
                            </View>
                        </View>
                    </View>
                </View>


                <View style={{ height: responsiveScreenHeight(6), justifyContent: 'center',paddingLeft:6 }}>
                    <View style={{ borderColor: 'rgb(243,244,246)', borderWidth: 1, height: responsiveScreenHeight(5), alignSelf: 'flex-start', padding: 10, alignItems: 'center', backgroundColor: "rgb(243,235,255)", borderRadius: 30 }}>
                        <Text style={{ textAlign: 'center', textAlignVertical: 'center' }}>Design</Text>
                    </View>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',


    },
});
