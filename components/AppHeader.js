import * as React from 'react';
import { View, Text } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useFonts } from 'expo-font';




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
        <View>
            <Appbar.Header style={{ backgroundColor: 'black',justifyContent:'center',alignItems:'center',alignSelf:'center',alignContent:'center' }}>
                <Appbar.Content style={{alignItems:'center',alignContent:'center'}} title={<Text style={{ color: 'white', fontFamily: 'Nunito-Variable', fontSize: 25, flex: 1,alignSelf:'center',textAlignVertical:'center' }}>WiseR</Text>} />
            </Appbar.Header>
        </View>
    );
}

export default AppHeader;