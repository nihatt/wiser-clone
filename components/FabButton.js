import * as React from 'react';
import { View, Text,Linking } from 'react-native';

import { FAB, Portal, Provider } from 'react-native-paper';

function FabButton() {
  const [url,setUrl] = React.useState("");

  const handlePress = React.useCallback(async (url) => {
    console.log(url)
    const supported = await Linking.canOpenURL(url);
    console.log(url)
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`URL Kısmında Bir Hata Var: ${url}`);
    }
  }, [url]);


    const [state, setState] = React.useState({ open: false });

    const onStateChange = ({ open }) => setState({ open });
  
    const { open } = state;
  return (
    <Provider>
    <Portal>
      <FAB.Group
        open={open}
        icon={open ? 'minus' : 'plus'}
        color={"white"}
        fabStyle={{backgroundColor:'black'}}
        actions={[
          {
            
            containerStyle:{borderColor:'red'},
            icon: 'whatsapp',
            label: 'Whatsapp ',
            onPress: () => {handlePress("https://wa.me/905551592342")},
          },
          {
            icon: 'instagram',
            label: 'İnstagram',
            onPress: () => {handlePress("https://www.instagram.com/yarenniyop74/")},
          },
        ]}
        onStateChange={onStateChange}
        onPress={() => {
          if (open) {
            // do something if the speed dial is open
          }
        }}
      />
    </Portal>
  </Provider>
  );
}

export default FabButton;