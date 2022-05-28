import React, {useState, useEffect} from 'react';
import {View,StyleSheet, Image, TouchableOpacity} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

const App = () => {
  const [toggle, setToggle] = useState(false);
    const handleChangeToggle = () => setToggle(oldToggle => !oldToggle);
  
    useEffect(() => {
      Torch.switchState(toggle);
    }, [toggle]);

    useEffect(()=>{
      const subscription = RNShake.addListener(()=>{
        setToggle(oldToggle => !oldToggle);
      });

      return () => subscription.remove();
    },[]);
  
    return (
    <View style={toggle ? style.containerlight : style.container}>
      <TouchableOpacity onPress={handleChangeToggle}>
      <Image 
      style={toggle ? style.lightningOn : style.lightningOff} 
      source={
        toggle 
        ? require('./assets/icons/vasco.png')
        : require('./assets/icons/dio.png')
      }
      />
      </TouchableOpacity>
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerlight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightningOn:{
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  lightningOff:{
  },
});