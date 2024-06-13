
import React from 'react';
import {
  Text,
  Button,
  View,
} from 'react-native';

const App=()=>{
  const data={
    name:"Sam",
    age:23,
    email:"sam@gmail.com",
  }
  const saveAPIData= async()=>{
   const url="http://10.0.2.2:3000/users"
   let result= await fetch(url,{
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
   }
  )
  result=await result.json();
  console.warn(result)

  }
  return (
 <View>
  <Text style={{fontSize:30}}>Post API Call</Text>
  <Button title='Save Data' onPress={saveAPIData}/>
 </View>
  );
}




export default App;
