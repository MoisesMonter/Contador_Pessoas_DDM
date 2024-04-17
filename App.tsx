import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from './src/components/atomes/Button';
import { useState } from 'react';

export default function App() {
  const [count,setcount] = useState(0)  

  const increment =()=>{
    setcount(count+1)
  }

  const decrement = () =>{
    setcount(count-1)
  }


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contador de Pessoas</Text>
      <Text style={[styles.window_container,styles.window_text]}>{count} </Text>
      <Button type_text='+' onPress={increment} />
      <Button type_text='-' onPress={decrement}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#636ABA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    fontFamily:'arial',
    fontSize:30,
    color:'white',
  },
  window_container:{
      margin:30,
      padding:20,
      width:170,
      backgroundColor:'white',
      textAlign:'center',
      borderRadius:10,

  },
  window_text:{
    fontSize:20,
    color:'black',
}
  
});
