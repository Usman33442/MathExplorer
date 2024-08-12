import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const DistanceOfLine = () => {
  const [point1, setPoint1] = useState('');
  const [point2, setPoint2] = useState('');
  const [distance, setDistance] = useState(null);

  const calculateDistance = () => {
    const x1 = parseFloat(point1);
    const x2 = parseFloat(point2);
    const distance = Math.abs(x2 - x1);
    setDistance(distance);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Distance of Line Calculator</Text>
      
      <TextInput
        placeholder="Enter Point 1"
        value={point1}
        keyboardType='numeric'
        onChangeText={setPoint1}
        style={{
          width: 200,
          height: 40,
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 10,
          paddingHorizontal: 10,
          marginBottom: 10,
          backgroundColor: '#fff',
        }}
      />

      <TextInput
        placeholder="Enter Point 2"
        value={point2}
        keyboardType='numeric'
        onChangeText={setPoint2}
        style={{
          width: 200,
          height: 40,
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 10,
          paddingHorizontal: 10,
          marginBottom: 10,
          backgroundColor: '#fff',
        }}
      />

      <Button
        title="Calculate"
        onPress={calculateDistance}
        color="#007AFF"
        style={{ borderRadius: 10 }}
      />

      {distance !== null && (
        <Text style={{ fontSize: 18, marginTop: 20 }}>Distance: {distance}</Text>
      )}
    </View>
  );
};

export default DistanceOfLine;
