import * as React from 'react';
import { View, Text } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useFonts } from 'expo-font';
import { responsiveScreenHeight } from 'react-native-responsive-dimensions';




function AppHeader(props) {
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
        <View style={{flex:1}}>
            <Appbar.Header style={{ backgroundColor: 'black'}}>
                <Appbar.Content style={{alignItems:'center'}} title={<Text style={{ color: 'white', fontFamily: 'Nunito-Variable', fontSize: 25}}>WiseR</Text>} />
            </Appbar.Header>
        </View>
    );
}

export default AppHeader;