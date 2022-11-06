import * as React from 'react';
import { View, Text } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useFonts } from 'expo-font';
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
} from "react-native-responsive-dimensions";



function CategoriesCard(props) {

    return (
        <View>
            <View style={{ borderColor: 'rgb(243,244,246)', borderWidth: 1, height: responsiveScreenHeight(5), alignSelf: 'flex-start', padding: 10, paddingHorizontal:20,marginHorizontal:5,alignItems: 'center', backgroundColor: "rgb(243,235,255)", borderRadius: 30 }}>
                <Text style={{ textAlign: 'center', textAlignVertical: 'center' }}>{props.categoryname}</Text>
            </View>
        </View>
    );
}

export default CategoriesCard;