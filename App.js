import React from 'react';
import { Button, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={{paddingTop: 50, paddingRight: 30, paddingBottom: 30, paddingLeft:30}}>
      <View>
        <TextInput placeholder="Course Goal" style={{borderColor: 'black', borderWidth: 1}}/>
        <Button title="ADD"/>
      </View>
      <View>
      </View>
    </View>
  );
}
